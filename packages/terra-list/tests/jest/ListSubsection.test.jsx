import React from 'react';
import { Item, Subsection } from '../../src/index';

// Snapshot Tests
it('should render with items', () => {
  const item1 = <Item key="123" />;
  const item2 = <Item key="124" />;
  const item3 = <Item key="125" />;
  const item4 = <Item key="126" />;
  const item5 = <Item key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = shallow(<Subsection title="test">{items}</Subsection>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with no items', () => {
  const shallowComponent = shallow(<Subsection title="test" />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with level', () => {
  const shallowComponent = shallow(<Subsection title="test" level={3} />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsed', () => {
  const shallowComponent = shallow(<Subsection title="test" isCollapsed />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsible', () => {
  const shallowComponent = shallow(<Subsection title="test" isCollapsible />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with callback functions', () => {
  const shallowComponent = shallow(<Subsection title="test" refCallback={jest.fn()} onSelect={jest.fn()} />);
  expect(shallowComponent).toMatchSnapshot();
});
