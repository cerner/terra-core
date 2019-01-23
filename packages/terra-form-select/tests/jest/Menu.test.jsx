import React from 'react';
import Menu from '../../src/_Menu';
import Option from '../../src/_Option';
import intlContexts from './intl-context-setup';

describe('Menu', () => {
  it('should render a default Menu', () => {
    const menu = <Menu onSelect={() => {}} variant="default" value="value" />;
    const wrapper = shallow(menu, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Menu with no results', () => {
    const menu = <Menu onSelect={() => {}} variant="default" value="value" />;
    const wrapper = shallow(menu, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Menu with an add option', () => {
    const menu = <Menu onSelect={() => {}} variant="tag" value="value" searchValue="Tag" />;
    const wrapper = shallow(menu, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the search input aria-descendent attribute', () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');

    const menu = (
      <Menu onSelect={() => {}} searchInput={input} variant="default" searchValue="display">
        <Option value="value" display="display" />
        <Option value="value_two" display="display" />
      </Menu>
    );

    const wrapper = mount(menu, intlContexts.shallowContext);
    wrapper.setState({ active: 'value_two' });
    expect(input.getAttribute('aria-activedescendant')).toEqual('terra-select-option-value_two');
  });
});
