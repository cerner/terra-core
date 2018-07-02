import React from 'react';
import FilterView from '../../src/FilterView';

describe('FilterView', () => {
  const defaultRender = <FilterView />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.filter-view').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class filter-view', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('filter-view');
  });
});
