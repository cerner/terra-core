import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import List, { Item, Section, Subsection } from '../../src/index';

it('should render List with items', () => {
  const item1 = <Item key="1" isSelectable />;
  const item2 = <Item key="2" isSelectable />;
  const items = [item1, item2];
  const component = mountWithIntl(<List isDraggable>{items}</List>);
  const list = component.find('Droppable');
  expect(list.prop('droppableId')).toEqual('ListItem');
  expect(component).toMatchSnapshot();
});

it('should render Section with items', () => {
  const item1 = <Item key="123" isSelectable />;
  const item2 = <Item key="124" isSelectable />;
  const items = [item1, item2];
  const component = mountWithIntl(<Section title="test" isDraggable>{items}</Section>);
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
  const component = mountWithIntl(<Subsection title="subsection" isDraggable>{items}</Subsection>);
  const subSection = component.find('Droppable');
  expect(subSection.prop('droppableId')).toEqual('listSubSection');
  expect(component).toMatchSnapshot();
});

it('should render List without Draggable items', () => {
  const item1 = <Item key="123" isSelectable />;
  const item2 = <Item key="124" isSelectable />;
  const item3 = <Item key="125" isSelectable />;
  const items = [item1, item2, item3];
  const shallowComponent = shallowWithIntl(<List>{items}</List>).dive();
  const list = shallowComponent.find('ul').children();
  expect(list.length).toBe(items.length);
  const listItem = shallowComponent.find('ListItem');
  expect(listItem.length).toBe(3);
  expect(shallowComponent).toMatchSnapshot();
});

