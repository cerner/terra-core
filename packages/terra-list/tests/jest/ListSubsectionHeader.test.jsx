import React from 'react';
import ListSubsectionHeader from '../../src/ListSubsectionHeader';

// Snapshot Tests
it('should render default', () => {
  const shallowComponent = shallow(<ListSubsectionHeader title="test" />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with level', () => {
  const shallowComponent = shallow(<ListSubsectionHeader title="test" level={3} />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsed', () => {
  const shallowComponent = shallow(<ListSubsectionHeader title="test" isCollapsed />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsible', () => {
  const shallowComponent = shallow(<ListSubsectionHeader title="test" isCollapsible />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with callback functions', () => {
  const shallowComponent = shallow(<ListSubsectionHeader title="test" refCallback={jest.fn()} onSelect={jest.fn()} />);
  expect(shallowComponent).toMatchSnapshot();
});
