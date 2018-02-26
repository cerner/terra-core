import React from 'react';
import SectionHeader from '../../src/SectionHeader';

describe('SectionHeader', () => {
  const defaultRender = <SectionHeader />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.section-header').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class section-header', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('section-header');
  });
});
