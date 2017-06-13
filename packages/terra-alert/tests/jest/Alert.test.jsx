import React from 'react';
import Alert from '../../src/Alert';

describe('Alert', () => {
  const defaultRender = <Alert />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.terra-Alert').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class terra-Alert', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terra-Alert');
  });
});
