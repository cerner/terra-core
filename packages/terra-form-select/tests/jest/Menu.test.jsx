import React from 'react';
import Menu from '../../src/_Menu';
import Option from '../../src/_Option';
import intlContexts from './intl-context-setup';

describe('Menu', () => {
  it('should render a default Menu', () => {
    const liveRegion = { current: document.createElement('div') };

    const menu = <Menu onSelect={() => {}} visuallyHiddenComponent={liveRegion} variant="default" value="value" />;
    const wrapper = render(menu, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not error when visuallyHiddenComponent is not provided', () => {
    const mockIntl = { formatMessage: id => (`No Results for ${id.id}`) };

    const menu = (
      <Menu onSelect={() => {}} intl={mockIntl} variant="default" value="value" searchValue="asdf">
        <Option value="value" display="display" />
      </Menu>
    );

    const wrapper = shallow(menu, intlContexts.shallowContext);

    jest.useFakeTimers();

    wrapper.setState({ hasNoResults: true });

    jest.advanceTimersByTime(500);
    expect(true).toEqual(true);
  });

  it('should not error when visuallyHiddenComponent has null for current', () => {
    const liveRegion = { current: null };
    const mockIntl = { formatMessage: id => (`No Results for ${id.id}`) };

    const menu = (
      <Menu onSelect={() => {}} intl={mockIntl} visuallyHiddenComponent={liveRegion} variant="default" value="value" searchValue="asdf">
        <Option value="value" display="display" />
      </Menu>
    );

    const wrapper = shallow(menu, intlContexts.shallowContext);

    jest.useFakeTimers();

    wrapper.setState({ hasNoResults: true });

    jest.advanceTimersByTime(500);
    expect(true).toEqual(true);
  });

  it('should render a Menu with the clear option', () => {
    const liveRegion = { current: document.createElement('div') };

    jest.useFakeTimers();

    const menu = (
      <Menu onSelect={() => {}} visuallyHiddenComponent={liveRegion} variant="combobox" clearOptionDisplay="-Select-" searchValue="">
        <Option value="value" display="display" />
      </Menu>
    );

    jest.useFakeTimers();

    const wrapper = shallow(menu, intlContexts.shallowContext);

    jest.runOnlyPendingTimers();

    expect(wrapper).toMatchSnapshot();
  });
});
