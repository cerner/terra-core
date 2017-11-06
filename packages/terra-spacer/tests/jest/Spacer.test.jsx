import React from 'react';
import Spacer from '../../src/Spacer';

describe('Spacer', () => {
  const defaultRender = <Spacer />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.spacer').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class spacer', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('spacer');
  });
});
