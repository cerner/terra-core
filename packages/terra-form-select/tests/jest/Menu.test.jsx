import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import Option from '../../src/shared/_Option';
import ComboboxMenu from '../../src/combobox/Menu';
import SingleSelectMenu from '../../src/single/Menu';

describe('Menu', () => {
  it('should render a default Menu', () => {
    const liveRegion = { current: document.createElement('div') };

    const menu = <SingleSelectMenu onSelect={() => {}} visuallyHiddenComponent={liveRegion} value="value" />;
    const wrapper = enzymeIntl.shallowWithIntl(menu);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Menu with no results and update the live region appropriately', () => {
    const liveRegion = { current: document.createElement('div') };
    const mockIntl = { formatMessage: id => (`No Results for ${id.id}`) };

    const menu = (
      <SingleSelectMenu onSelect={() => {}} visuallyHiddenComponent={liveRegion} intl={mockIntl} value="value" searchValue="asdf">
        <Option value="value" display="display" />
      </SingleSelectMenu>
    );

    const wrapper = enzymeIntl.shallowWithIntl(menu);

    jest.useFakeTimers();

    wrapper.setState({ hasNoResults: true });

    jest.advanceTimersByTime(500);

    expect(wrapper).toMatchSnapshot();
  });

  it('should not error when visuallyHiddenComponent is not provided', () => {
    const mockIntl = { formatMessage: id => (`No Results for ${id.id}`) };

    const menu = (
      <SingleSelectMenu onSelect={() => {}} intl={mockIntl} value="value" searchValue="asdf">
        <Option value="value" display="display" />
      </SingleSelectMenu>
    );

    const wrapper = enzymeIntl.shallowWithIntl(menu);

    jest.useFakeTimers();

    wrapper.setState({ hasNoResults: true });

    jest.advanceTimersByTime(500);
    expect(true).toEqual(true);
  });

  it('should not error when visuallyHiddenComponent has null for current', () => {
    const liveRegion = { current: null };
    const mockIntl = { formatMessage: id => (`No Results for ${id.id}`) };

    const menu = (
      <SingleSelectMenu onSelect={() => {}} intl={mockIntl} visuallyHiddenComponent={liveRegion} value="value" searchValue="asdf">
        <Option value="value" display="display" />
      </SingleSelectMenu>
    );

    const wrapper = enzymeIntl.shallowWithIntl(menu);

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

    const wrapper = enzymeIntl.shallowWithIntl(menu);

    jest.runOnlyPendingTimers();

    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const liveRegion = { current: document.createElement('div') };
    const wrapper = enzymeIntl.mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <SingleSelectMenu onSelect={() => {}} visuallyHiddenComponent={liveRegion} value="value" searchValue="asdf">
          <Option value="value" display="display" />
        </SingleSelectMenu>
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
