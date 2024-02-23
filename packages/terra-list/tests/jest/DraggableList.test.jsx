import React from 'react';
import List, { Item, Section, Subsection } from '../../src/index';

Object.defineProperty(Math, 'random', {
  value: () => 0.5,
});

it('should render List with items', () => {
  const item1 = <Item key="1" isSelectable />;
  const item2 = <Item key="2" isSelectable />;
  const items = [item1, item2];
  const component = enzymeIntl.mountWithIntl(<List isDraggable>{items}</List>);
  const list = component.find('Droppable');
  expect(list.prop('droppableId')).toEqual('ListItem');
  expect(component).toMatchSnapshot();
});

it('should render Section with items', () => {
  const item1 = <Item key="123" isSelectable />;
  const item2 = <Item key="124" isSelectable />;
  const items = [item1, item2];
  const component = enzymeIntl.mountWithIntl(<Section title="test" isDraggable>{items}</Section>);
  const section = component.find('Droppable');
  expect(section.prop('droppableId')).toEqual('listSection');
  const listItem = component.find('ListItem');
  expect(listItem).toBeDefined();
  expect(component).toMatchSnapshot();
});

it('should render subsection with items', () => {
  const item1 = <Item key="13" isSelectable />;
  const item2 = <Item key="14" isSelectable />;
  const item3 = <Item key="15" isSelectable />;
  const items = [item1, item2, item3];
  const component = enzymeIntl.mountWithIntl(<Subsection title="subsection" isDraggable>{items}</Subsection>);
  const subSection = component.find('Droppable');
  expect(subSection.prop('droppableId')).toEqual('listSubSection');
  expect(component).toMatchSnapshot();
});

it('should render List without Draggable items', () => {
  const item1 = <Item key="123" isSelectable />;
  const item2 = <Item key="124" isSelectable />;
  const item3 = <Item key="125" isSelectable />;
  const items = [item1, item2, item3];
  const shallowComponent = enzymeIntl.shallowWithIntl(<List>{items}</List>).dive();
  const list = shallowComponent.find('ul');
  expect(list.length).toBe(1);
  expect(shallowComponent).toMatchSnapshot();
});

