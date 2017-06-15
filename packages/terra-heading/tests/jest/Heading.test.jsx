import React from 'react';
import Heading from '../../src/Heading';

describe('Heading', () => {
  const defaultRender = <Heading />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.terra-Heading').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class terra-Heading', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terra-Heading');
  });
});
