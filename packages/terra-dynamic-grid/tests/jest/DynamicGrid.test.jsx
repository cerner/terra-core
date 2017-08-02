import React from 'react';
import DynamicGrid from '../../src/DynamicGrid';

describe('DynamicGrid', () => {
  const defaultRender = <DynamicGrid />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.dynamicGrid').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class dynamicGrid', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('dynamicGrid');
  });
});
