import React from 'react';
import ListSubsectionHeader from '../../src/ListSubsectionHeader';

// Snapshot Tests
it('should render default', () => {
  const shallowComponent = shallow(<ListSubsectionHeader />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with title', () => {
  const shallowComponent = shallow(<ListSubsectionHeader title="Test Title" />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with title and level', () => {
  const shallowComponent = shallow(<ListSubsectionHeader title="Test Title" level={3} />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsed', () => {
  const shallowComponent = shallow(<ListSubsectionHeader isCollapsed />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsible', () => {
  const shallowComponent = shallow(<ListSubsectionHeader isCollapsible />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with callback functions', () => {
  const shallowComponent = shallow(<ListSubsectionHeader refCallback={jest.fn()} onSelect={jest.fn()} />);
  expect(shallowComponent).toMatchSnapshot();
});
