import React from 'react';
import DropdownButton from '../../src/DropdownButton';

describe('DropdownButton', () => {
  const defaultRender = <DropdownButton />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.dropdown-button').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class dropdown-button', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('dropdown-button');
  });
});
