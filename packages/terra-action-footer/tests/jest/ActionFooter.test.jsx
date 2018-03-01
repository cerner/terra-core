import React from 'react';
import ActionFooter from '../../src/ActionFooter';

describe('ActionFooter', () => {
  const defaultRender = <ActionFooter />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.action-footer').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class action-footer', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('action-footer');
  });
});
