import React from 'react';
import { Item, Section } from '../../src/index';

// Snapshot Tests
it('should render with items', () => {
  const item1 = <Item isSelectable key="123" />;
  const item2 = <Item isSelectable key="124" />;
  const item3 = <Item isSelectable isDisabled key="125" />;
  const item4 = <Item isSelectable isDisabled key="126" />;
  const item5 = <Item isSelectable key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = shallow(<Section role="listbox" title="test">{items}</Section>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with no items', () => {
  const shallowComponent = shallow(<Section title="test" />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with level', () => {
  const shallowComponent = shallow(<Section title="test" level={3} />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsed', () => {
  const shallowComponent = shallow(<Section title="test" isCollapsed />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsible', () => {
  const shallowComponent = shallow(<Section title="test" isCollapsible />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with callback functions', () => {
  const shallowComponent = shallow(<Section title="test" refCallback={jest.fn()} onSelect={jest.fn()} />);
  expect(shallowComponent).toMatchSnapshot();
});
