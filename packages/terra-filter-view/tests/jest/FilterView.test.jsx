import React from 'react';
import FilterView from '../../src/FilterView';

describe('Snapshots', () => {
  it('renders a default FilterView', () => {
    const wrapper = shallow(<FilterView />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a list FilterView', () => {
    const wrapper = shallow(<FilterView variant="list" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a list FilterView with dropdownAttrs spread', () => {
    const wrapper = shallow(<FilterView variant="list" dropdownAttrs={{ onClick: () => {} }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a list FilterView without results initially', () => {
    const wrapper = shallow(<FilterView variant="list" showResultsInitially={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a default FilterView with a placeholder', () => {
    const wrapper = shallow(<FilterView placeholder="Test" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a list FilterView with a placeholder', () => {
    const wrapper = shallow(<FilterView variant="list" placeholder="Test" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a default FilterView with a default value', () => {
    const wrapper = shallow(<FilterView defaultValue="Test" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a list FilterView with a default value', () => {
    const wrapper = shallow(<FilterView variant="list" defaultValue="Test" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a disabled default FilterView', () => {
    const wrapper = shallow(<FilterView disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a disabled list FilterView', () => {
    const wrapper = shallow(<FilterView variant="list" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a disabled default FilterView with a default value', () => {
    const wrapper = shallow(<FilterView disabled defaultValue="default" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a disabled list FilterView with a default value', () => {
    const wrapper = shallow(<FilterView variant="list" disabled defaultValue="default" />);
    expect(wrapper).toMatchSnapshot();
  });
});
