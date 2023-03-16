import React from 'react';
import TerraTestComp from '../../src/TerraTestComp';

describe('TerraTestComp', () => {
  const defaultRender = <TerraTestComp />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.terra-test-comp').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class terra-test-comp', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terra-test-comp');
  });
});
