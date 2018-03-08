import React from 'react';
import ToggleSectionHeader from '../../src/ToggleSectionHeader';

describe('ToggleSectionHeader', () => {
  const defaultRender = <ToggleSectionHeader />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.toggle-section-header').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class toggle-section-header', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('toggle-section-header');
  });
});
