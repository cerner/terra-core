import React from 'react';
import Menu from '../../src/_Menu';

describe('Menu', () => {
  it('should render a dropdown Menu', () => {
    const menu = <Menu onSelect={() => {}} value="value" />;
    const wrapper = shallow(menu);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Menu with no results', () => {
    const menu = <Menu onSelect={() => {}} value="value" />;
    const wrapper = shallow(menu);
    expect(wrapper).toMatchSnapshot();
  });
});
