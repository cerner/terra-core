import React from 'react';
import ProgressivePaginator from '../../src/ProgressivePaginator';

describe('ProgressivePaginator', () => {
  const defaultRender = <ProgressivePaginator />;

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
