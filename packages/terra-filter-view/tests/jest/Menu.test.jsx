import React from 'react';
import Menu from '../../src/_Menu';
import intlContexts from './intl-context-setup';

describe('Menu', () => {
  it('should render a dropdown Menu', () => {
    const menu = <Menu onSelect={() => {}} value="value" />;
    const wrapper = shallow(menu, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Menu with no results', () => {
    const menu = <Menu onSelect={() => {}} value="value" />;
    const wrapper = shallow(menu, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });
});
