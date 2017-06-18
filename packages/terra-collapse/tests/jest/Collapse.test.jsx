import React from 'react';
import Collapse from '../../src/Collapse';

describe('Collapse', () => {
  const defaultRender = <Collapse />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.terra-Collapse').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class terra-Collapse', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terra-Collapse');
  });
});
