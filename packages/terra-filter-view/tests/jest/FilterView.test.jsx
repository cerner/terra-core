import React from 'react';
import FilterView from '../../src/FilterView';
import intlContexts from './intl-context-setup';

describe('FilterView', () => {
  const defaultRender = <FilterView />;

  // Snapshot Tests
  it('renders a default FilterView', () => {
    const wrapper = shallow(<FilterView />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a persistent FilterView', () => {
    const wrapper = shallow(<FilterView variant="persistent" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a FilterView with a placeholder', () => {
    const wrapper = shallow(<FilterView placeholder="Test" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a FilterView with a default value', () => {
    const wrapper = shallow(<FilterView defaultValue="Test" />, intlContexts.shallowContext);
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
