import React from 'react';
import ListSectionHeader from '../../src/ListSectionHeader';

// Snapshot Tests
it('should render default', () => {
  const shallowComponent = shallow(<ListSectionHeader title="test" />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with level', () => {
  const shallowComponent = shallow(<ListSectionHeader title="test" level={3} />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsed', () => {
  const shallowComponent = shallow(<ListSectionHeader title="test" isCollapsed />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsible', () => {
  const shallowComponent = shallow(<ListSectionHeader title="test" isCollapsible />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with callback functions', () => {
  const shallowComponent = shallow(<ListSectionHeader title="test" refCallback={jest.fn()} onSelect={jest.fn()} />);
  expect(shallowComponent).toMatchSnapshot();
});
