import React from 'react';
import ShowHide from '../../src/ShowHide';

describe('ShowHide', () => {
  const defaultRender = <ShowHide />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.show-hide').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class show-hide', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('show-hide');
  });
});
