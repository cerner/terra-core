import React from 'react';
import Signature from '../../src/Signature';

describe('Signature', () => {
  const defaultRender = <Signature />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.terra-Signature').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class terra-Signature', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terra-Signature');
  });
});
