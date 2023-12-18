import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import Checkbox from 'terra-form-checkbox';
import List, { Item } from '../../src/index';

Object.defineProperty(Math, 'random', {
  value: () => 0.5,
});

it('should render List items with interactiveElement', () => {
  const item1 = <Item key="1" isSelectable><Checkbox id="defaultCheckbox_1" labelText="John Smith" /></Item>;
  const item2 = <Item key="2" isSelectable><Checkbox id="defaultCheckbox_2" labelText="Mary Jones" /></Item>;
  const item3 = <Item key="3" isSelectable><Checkbox id="defaultCheckbox_3" labelText="Sam Brown" /></Item>;
  const item4 = <Item key="4" isSelectable><Checkbox id="defaultCheckbox_4" labelText="John David" /></Item>;
  const items = [item1, item2, item3, item4];
  const component = mountWithIntl(<List isDraggable>{items}</List>);
  const list = component.find('Droppable');
  expect(list.prop('droppableId')).toEqual('ListItem');
  expect(component).toMatchSnapshot();
});

it('selects a patient on checkbox click', () => {
  const item1 = <Item key="1" isSelectable><Checkbox id="defaultCheckbox_1" labelText="John Smith" /></Item>;
  const item2 = <Item key="2" isSelectable><Checkbox id="defaultCheckbox_2" labelText="Mary Jones" /></Item>;
  const item3 = <Item key="3" isSelectable><Checkbox id="defaultCheckbox_3" labelText="Sam Brown" /></Item>;
  const item4 = <Item key="4" isSelectable><Checkbox id="defaultCheckbox_4" labelText="John David" /></Item>;
  const items = [item1, item2, item3, item4];
  const component = mountWithIntl(<List isDraggable>{items}</List>);
  component.find('#defaultCheckbox_2 input').simulate('change');
  expect(component).toMatchSnapshot();
});
