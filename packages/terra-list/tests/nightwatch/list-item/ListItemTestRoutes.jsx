/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ListItemTests from './ListItemTests';
import DefaultListItem from './DefaultListItem';
import SelectedListItem from './SelectedListItem';
import SelectableListItem from './SelectableListItem';
import ChevronListItem from './ChevronListItem';
import ContentListItem from './ContentListItem';

const routes = (
  <div>
    <Route path="/tests/list-item-tests" component={ListItemTests} />
    <Route path="/tests/list-item-tests/default" component={DefaultListItem} />
    <Route path="/tests/list-item-tests/selected" component={SelectedListItem} />
    <Route path="/tests/list-item-tests/selectable" component={SelectableListItem} />
    <Route path="/tests/list-item-tests/chevron" component={ChevronListItem} />
    <Route path="/tests/list-item-tests/content" component={ContentListItem} />
  </div>
);

export default routes;
