import React from 'react';
import Text from '../../src/Text';

describe('Text', () => {
  const defaultRender = <Text />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.terra-Text').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class terra-Text', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terra-Text');
  });
});
