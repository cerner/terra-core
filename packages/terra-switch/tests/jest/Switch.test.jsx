import React from 'react';
import Switch from '../../src/Switch';

describe('Switch', () => {
  const defaultRender = <Switch />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.switch').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class switch', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('switch');
  });
});
