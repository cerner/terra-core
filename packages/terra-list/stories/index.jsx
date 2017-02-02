/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf, addDecorator } from '@kadira/storybook';
import '@kadira/storybook-addon-knobs';
import { setOptions } from '@kadira/storybook-addon-options';
import { checkA11y } from 'storybook-addon-a11y';
import 'storybook-addon-i18n-tools';

import List from '../src/List';

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

storiesOf('List ', module)
  .add('Without props', () => (
    <List />
  ));
