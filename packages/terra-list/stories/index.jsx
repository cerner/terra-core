/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf, addDecorator } from '@kadira/storybook';
import '@kadira/storybook-addon-knobs';
import { setOptions } from '@kadira/storybook-addon-options';
import { checkA11y } from 'storybook-addon-a11y';
import 'storybook-addon-i18n-tools';

import List from '../src/List';
import ListItem from '../src/ListItem';
import SelectableList from '../src/SelectableList';

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

const display1 = <ListItem key='123' />;
const display2 = <ListItem key='124' />;
const display3 = <ListItem key='125' />;
const display4 = <ListItem key='126' />;
const display5 = <ListItem key='127' />;
const display6 = <ListItem key='128' />;
const displays = [display1, display2, display3, display4, display5, display6];

storiesOf('SelectableList ', module)
  .add('Without props', () => (
    <SelectableList items={displays} />
  ));
