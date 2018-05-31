import React from 'react';
import Hyperlink from '../../src/Hyperlink';

describe('Hyperlink', () => {
  const defaultRender = <Hyperlink />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.hyperlink').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class hyperlink', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('hyperlink');
  });
});
