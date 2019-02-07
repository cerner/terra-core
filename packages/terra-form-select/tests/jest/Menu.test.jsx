import React from 'react';
import Menu from '../../src/_Menu';
import Option from '../../src/_Option';
import intlContexts from './intl-context-setup';

describe('Menu', () => {
  it('should render a default Menu', () => {
    const liveRegion = { current: document.createElement('div') };

    const menu = <Menu onSelect={() => {}} visuallyHiddenComponent={liveRegion} variant="default" value="value" />;
    const wrapper = shallow(menu, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Menu with an add option and set the screen reader region to blank', () => {
    const liveRegion = { current: document.createElement('div') };

    jest.useFakeTimers();

    const menu = (
      <Menu onSelect={() => {}} visuallyHiddenComponent={liveRegion} variant="tag" value="value" searchValue="value">
        <Option value="value" display="display" />
      </Menu>
    );

    jest.useFakeTimers();

    const wrapper = shallow(menu, intlContexts.shallowContext);

    wrapper.setState({ searchValue: 'value' });

    jest.runOnlyPendingTimers();

    expect(wrapper).toMatchSnapshot();
    expect(liveRegion.current.innerText).toEqual('');
  });

  it('should render a Menu with no results and update the live region appropriately', () => {
    const liveRegion = { current: document.createElement('div') };
    const mockIntl = { formatMessage: id => (`No Results for ${id.id}`) };

    const menu = (
      <Menu onSelect={() => {}} visuallyHiddenComponent={liveRegion} intl={mockIntl} variant="default" value="value" searchValue="asdfasdf">
        <Option value="value" display="display" />
      </Menu>
    );

    const wrapper = shallow(menu, intlContexts.shallowContext);

    jest.useFakeTimers();

    wrapper.setProps({ searchValue: 'asdf' });

    jest.advanceTimersByTime(500);

    expect(wrapper).toMatchSnapshot();
    expect(liveRegion.current.innerText).toEqual('No matching results for "asdf"');
  });

  it('should update the search input aria-descendent attribute and visually hidden text when active element changes', () => {
    const liveRegion = { current: document.createElement('div') };
    const input = document.createElement('input');
    input.setAttribute('type', 'text');

    const menu = (
      <Menu onSelect={() => {}} visuallyHiddenComponent={liveRegion} focusRegion={input} variant="default" searchValue="display">
        <Option value="value" display="display" />
        <Option value="value_two" display="display" />
      </Menu>
    );

    const wrapper = mount(menu, intlContexts.shallowContext);
    wrapper.setState({ active: 'value_two' });
    wrapper.instance().updateCurrentActiveScreenReader();
    expect(input.getAttribute('aria-activedescendant')).toEqual('terra-select-option-value_two');

    expect(liveRegion.current.innerText).toEqual('display');
  });

  it('should update the visually hidden text with Selected text when a selected option is active', () => {
    const liveRegion = { current: document.createElement('div') };

    const menu = (
      <Menu onSelect={() => {}} visuallyHiddenComponent={liveRegion} variant="default" searchValue="display" value="value_two">
        <Option value="value" display="display" />
        <Option value="value_two" display="display" />
      </Menu>
    );

    const wrapper = mount(menu, intlContexts.shallowContext);
    wrapper.setState({ active: 'value_two' });
    wrapper.instance().updateCurrentActiveScreenReader();
    expect(liveRegion.current.innerText).toEqual('display Selected');
  });
});
