/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf, addDecorator } from '@kadira/storybook';
import '@kadira/storybook-addon-knobs';
import { setOptions } from '@kadira/storybook-addon-options';
import { checkA11y } from 'storybook-addon-a11y';
import 'storybook-addon-i18n-tools';

import List from '../src/List';
import SingleSelectList from '../src/SingleSelectList';
import MultiSelectList from '../src/MultiSelectList';

setOptions({
  name: 'List',
  url: 'https://github.com/cerner/terra-list',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
});

addDecorator(checkA11y);

const display1 = <List.Item key="123" />;
const display2 = <List.Item key="124" />;
const display3 = <List.Item key="125" />;
const display4 = <List.Item key="126" />;
const display5 = <List.Item key="127" />;
const display6 = <List.Item key="128" isSelectable={false} />;
const displays = [display1, display2, display3, display4, display5, display6];

storiesOf('SelectableList ', module)
  .add('List', () => (
    <List>
      <List.Item key="123" />
      <List.Item key="124" />
      <List.Item key="125" />
      <List.Item key="126" />
      <List.Item key="127" />
      <List.Item key="128" isSelectable={false} />
    </List>
  ))
  .add('List Divided', () => (
    <List isDivided>
      <List.Item key="123" />
      <List.Item key="124" />
      <List.Item key="125" />
      <List.Item key="126" />
      <List.Item key="127" />
      <List.Item key="128" isSelectable={false} />
    </List>
  ))
  .add('SingleSelectList', () => (
    <SingleSelectList isDivided hasChevrons={false}>
      {displays}
    </SingleSelectList>
  ))
  .add('SingleSelectList Chevrons', () => (
    <SingleSelectList isDivided hasChevrons>
      {displays}
    </SingleSelectList>
  ))
  .add('MultiSelectList', () => (
    <MultiSelectList maxSelectionCount={3} isDivided>
      {displays}
    </MultiSelectList>
  ));
