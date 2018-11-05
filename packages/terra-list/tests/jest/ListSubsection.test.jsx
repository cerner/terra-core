import React from 'react';
import { Item, Subsection } from '../../src/List';

// Snapshot Tests
it('should render with items', () => {
  const item1 = <Item key="123" />;
  const item2 = <Item key="124" />;
  const item3 = <Item key="125" />;
  const item4 = <Item key="126" />;
  const item5 = <Item key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = shallow(<Subsection>{items}</Subsection>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with no items', () => {
  const shallowComponent = shallow(<Subsection />);
  expect(shallowComponent).toMatchSnapshot();
});


it('should render with title', () => {
  const shallowComponent = shallow(<Subsection title="Test Title" />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with title and level', () => {
  const shallowComponent = shallow(<Subsection title="Test Title" level={3} />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsed', () => {
  const shallowComponent = shallow(<Subsection isCollapsed />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsible', () => {
  const shallowComponent = shallow(<Subsection isCollapsible />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with callback functions', () => {
  const shallowComponent = shallow(<Subsection refCallback={jest.fn()} onSelect={jest.fn()} />);
  expect(shallowComponent).toMatchSnapshot();
});
