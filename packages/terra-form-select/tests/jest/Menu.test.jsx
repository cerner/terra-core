import React from 'react';
import Menu from '../../src/_Menu';
import intlContexts from './intl-context-setup';

describe('Menu', () => {
  it('should render a default Menu', () => {
    const menu = <Menu onSelect={() => {}} variant="default" value="value" onActive={() => {}} />;
    const wrapper = shallow(menu, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Menu with no results', () => {
    const menu = <Menu onSelect={() => {}} variant="default" value="value" onActive={() => {}} />;
    const wrapper = shallow(menu, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Menu with an add option', () => {
    const menu = <Menu onSelect={() => {}} variant="tag" value="value" searchValue="Tag" onActive={() => {}} />;
    const wrapper = shallow(menu, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });
});
