import React from 'react';
import TabContainer from '../../src/TabContainer';

describe('TabContainer', () => {
  const defaultRender = <TabContainer />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.tab-container').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class tab-container', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('tab-container');
  });
});
