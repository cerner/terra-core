import React from 'react';
import Overlay from '../../src/Overlay';

describe('Overlay', () => {
  const defaultRender = <Overlay />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.terra-Overlay').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class terra-Overlay', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terra-Overlay');
  });
});
