import React from 'react';
import Toggler from '../../src/Toggler';

describe('Toggler', () => {
  const defaultRender = <Toggler />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.terra-Toggler').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class terra-Toggler', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terra-Toggler');
  });
});
