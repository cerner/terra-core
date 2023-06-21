import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import { injectIntl } from 'react-intl';

/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import Option from '../../src/shared/_Option';
import SharedUtil from '../../src/shared/_SharedUtil';
import ComboboxMenu from '../../src/combobox/Menu';
import { Menu } from '../../src/single/Menu';

jest.mock('../../src/shared/_SharedUtil');

describe('Menu', () => {
  it('should render a default Menu', () => {
    const liveRegion = { current: document.createElement('div') };
    const SingleSelectMenu = injectIntl(Menu);

    const menu = <SingleSelectMenu onSelect={() => {}} visuallyHiddenComponent={liveRegion} value="value" />;
    const wrapper = shallowWithIntl(menu);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Menu with no results and update the live region appropriately', () => {
    const liveRegion = { current: document.createElement('div') };
    const mockIntl = { formatMessage: id => (`No Results for ${id.id}`) };
    const SingleSelectMenu = injectIntl(Menu);

    const menu = (
      <SingleSelectMenu onSelect={() => {}} visuallyHiddenComponent={liveRegion} intl={mockIntl} value="value" searchValue="asdf">
        <Option value="value" display="display" />
      </SingleSelectMenu>
    );

    const wrapper = shallowWithIntl(menu);

    jest.useFakeTimers();

    wrapper.setState({ hasNoResults: true });

    jest.advanceTimersByTime(500);

    expect(wrapper).toMatchSnapshot();
  });

  it('should not error when visuallyHiddenComponent is not provided', () => {
    const mockIntl = { formatMessage: id => (`No Results for ${id.id}`) };
    const SingleSelectMenu = injectIntl(Menu);

    const menu = (
      <SingleSelectMenu onSelect={() => {}} intl={mockIntl} value="value" searchValue="asdf">
        <Option value="value" display="display" />
      </SingleSelectMenu>
    );

    const wrapper = shallowWithIntl(menu);

    jest.useFakeTimers();

    wrapper.setState({ hasNoResults: true });

    jest.advanceTimersByTime(500);
    expect(true).toEqual(true);
  });

  it('should not error when visuallyHiddenComponent has null for current', () => {
    const liveRegion = { current: null };
    const mockIntl = { formatMessage: id => (`No Results for ${id.id}`) };
    const SingleSelectMenu = injectIntl(Menu);

    const menu = (
      <SingleSelectMenu onSelect={() => {}} intl={mockIntl} visuallyHiddenComponent={liveRegion} value="value" searchValue="asdf">
        <Option value="value" display="display" />
      </SingleSelectMenu>
    );

    const wrapper = shallowWithIntl(menu);

    jest.useFakeTimers();

    wrapper.setState({ hasNoResults: true });

    jest.advanceTimersByTime(500);
    expect(true).toEqual(true);
  });

  it('should render a Menu with the clear option', () => {
    const liveRegion = { current: document.createElement('div') };

    jest.useFakeTimers();

    const menu = (
      <ComboboxMenu onSelect={() => {}} visuallyHiddenComponent={liveRegion} clearOptionDisplay="-Select-" searchValue="">
        <Option value="value" display="display" />
      </ComboboxMenu>
    );

    jest.useFakeTimers();

    const wrapper = shallowWithIntl(menu);

    jest.runOnlyPendingTimers();

    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const liveRegion = { current: document.createElement('div') };
    const SingleSelectMenu = injectIntl(Menu);

    const wrapper = mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <SingleSelectMenu onSelect={() => {}} visuallyHiddenComponent={liveRegion} value="value" searchValue="asdf">
          <Option value="value" display="display" />
        </SingleSelectMenu>
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call focus on select component when select is closed via key event while not using safari browser', () => {
    jest.spyOn(SharedUtil, 'isSafari').mockReturnValue(false);
    const liveRegion = { current: document.createElement('div') };

    const mockSelect = document.createElement('div');
    mockSelect.focus = jest.spyOn(mockSelect, 'focus');

    const menu = (
      <Menu onSelect={() => {}} visuallyHiddenComponent={liveRegion} intl={{}} value="value" searchValue="" select={mockSelect}>
        <Option value="value" display="display" />
      </Menu>
    );

    const wrapper = mountWithIntl(menu);
    wrapper.setState({ closedViaKeyEvent: true });
    wrapper.unmount();
    expect(mockSelect.focus).toHaveBeenCalled();
  });

  it('should call focus on select component when select is closed via key event while using safari browser', () => {
    jest.spyOn(SharedUtil, 'isSafari').mockReturnValue(true);
    const liveRegion = { current: document.createElement('div') };

    const mockSelect = document.createElement('div');
    mockSelect.focus = jest.spyOn(mockSelect, 'focus');

    const menu = (
      <Menu onSelect={() => {}} visuallyHiddenComponent={liveRegion} intl={{}} value="value" searchValue="" select={mockSelect}>
        <Option value="value" display="display" />
      </Menu>
    );

    const wrapper = mountWithIntl(menu);
    wrapper.setState({ closedViaKeyEvent: true });

    jest.useFakeTimers();
    wrapper.unmount();
    jest.advanceTimersByTime(400);

    expect(mockSelect.focus).toHaveBeenCalled();
  });
});
