import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import Option from '../../src/shared/_Option';
import ComboboxMenu from '../../src/combobox/Menu';
import DropdownMenu from '../../src/dropdown/Menu';

describe('Menu', () => {
  it('should render a default Menu', () => {
    const liveRegion = { current: document.createElement('div') };

    const menu = <DropdownMenu onSelect={() => {}} visuallyHiddenComponent={liveRegion} value="value" />;
    const wrapper = shallowWithIntl(menu);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Menu with no results and update the live region appropriately', () => {
    const liveRegion = { current: document.createElement('div') };
    const mockIntl = { formatMessage: id => (`No Results for ${id.id}`) };

    const menu = (
      <DropdownMenu onSelect={() => {}} visuallyHiddenComponent={liveRegion} intl={mockIntl} value="value" searchValue="asdf">
        <Option value="value" display="display" />
      </DropdownMenu>
    );

    const wrapper = shallowWithIntl(menu);

    jest.useFakeTimers();

    wrapper.setState({ hasNoResults: true });

    jest.advanceTimersByTime(500);

    expect(wrapper).toMatchSnapshot();
  });

  it('should not error when visuallyHiddenComponent is not provided', () => {
    const mockIntl = { formatMessage: id => (`No Results for ${id.id}`) };

    const menu = (
      <DropdownMenu onSelect={() => {}} intl={mockIntl} value="value" searchValue="asdf">
        <Option value="value" display="display" />
      </DropdownMenu>
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

    const menu = (
      <DropdownMenu onSelect={() => {}} intl={mockIntl} visuallyHiddenComponent={liveRegion} value="value" searchValue="asdf">
        <Option value="value" display="display" />
      </DropdownMenu>
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
});
