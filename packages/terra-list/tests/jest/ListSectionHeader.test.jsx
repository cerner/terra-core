import React from 'react';
import ListSectionHeader from '../../src/ListSectionHeader';

// Snapshot Tests
it('should render default', () => {
  const shallowComponent = shallow(<ListSectionHeader />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with title', () => {
  const shallowComponent = shallow(<ListSectionHeader title="Test Title" />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with title and level', () => {
  const shallowComponent = shallow(<ListSectionHeader title="Test Title" level={3} />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsed', () => {
  const shallowComponent = shallow(<ListSectionHeader isCollapsed />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsible', () => {
  const shallowComponent = shallow(<ListSectionHeader isCollapsible />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with callback functions', () => {
  const shallowComponent = shallow(<ListSectionHeader refCallback={jest.fn()} onSelect={jest.fn()} />);
  expect(shallowComponent).toMatchSnapshot();
});
