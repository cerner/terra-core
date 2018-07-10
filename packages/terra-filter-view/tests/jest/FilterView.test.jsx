import React from 'react';
import FilterView from '../../src/FilterView';
import intlContexts from './intl-context-setup';

describe('Snapshots', () => {
  it('renders a default FilterView', () => {
    const wrapper = shallow(<FilterView />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a list FilterView', () => {
    const wrapper = shallow(<FilterView variant="list" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a default FilterView with a placeholder', () => {
    const wrapper = shallow(<FilterView placeholder="Test" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a list FilterView with a placeholder', () => {
    const wrapper = shallow(<FilterView variant="list" placeholder="Test" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a default FilterView with a default value', () => {
    const wrapper = shallow(<FilterView defaultValue="Test" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a list FilterView with a default value', () => {
    const wrapper = shallow(<FilterView variant="list" defaultValue="Test" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a disabled default FilterView', () => {
    const wrapper = shallow(<FilterView disabled />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a disabled list FilterView', () => {
    const wrapper = shallow(<FilterView variant="list" disabled />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a disabled default FilterView with a default value', () => {
    const wrapper = shallow(<FilterView disabled defaultValue="default" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a disabled list FilterView with a default value', () => {
    const wrapper = shallow(<FilterView variant="list" disabled defaultValue="default" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });
  // Prop Tests
});
