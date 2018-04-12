import React from 'react';
import Paginator from '../../src/Paginator';

describe('Paginator', () => {
  const defaultRender = <Paginator />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.paginator').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class paginator', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('paginator');
  });
});
