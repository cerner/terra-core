import React from 'react';
import HorizontalDivider from '../../src/HorizontalDivider';

describe('HorizontalDivider', () => {
  const defaultRender = <HorizontalDivider />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.horizontal-divider').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class horizontal-divider', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('horizontal-divider');
  });
});
