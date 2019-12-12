import React from 'react';
import Section from '../../../src/subcomponents/_Section';

// Snapshot Tests
it('should render with content', () => {
  const shallowComponent = shallow(<Section title="test" numberOfColumns={1}>test content</Section>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with no items', () => {
  const shallowComponent = shallow(<Section title="test" numberOfColumns={1} />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsed', () => {
  const shallowComponent = shallow(<Section title="test" isCollapsed numberOfColumns={1} />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsible', () => {
  const shallowComponent = shallow(<Section title="test" isCollapsible numberOfColumns={1} />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with callback functions', () => {
  const shallowComponent = shallow(<Section title="test" refCallback={jest.fn()} onSelect={jest.fn()} numberOfColumns={1} />);
  expect(shallowComponent).toMatchSnapshot();
});
