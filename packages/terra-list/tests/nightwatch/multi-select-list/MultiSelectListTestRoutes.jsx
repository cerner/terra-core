/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import MultiSelectListTests from './MultiSelectListTests';
import DefaultMultiSelectList from './DefaultMultiSelectList';
import ItemsMultiSelectList from './ItemsMultiSelectList';
import ItemsDividedMultiSelectList from './ItemsDividedMultiSelectList';
import MaxCountMultiSelectList from './MaxCountMultiSelectList';
import OnChangeMultiSelectList from './OnChangeMultiSelectList';

const routes = (
  <div>
    <Route path="/tests/multi-select-list-tests" component={MultiSelectListTests} />
    <Route path="/tests/multi-select-list-tests/default" component={DefaultMultiSelectList} />
    <Route path="/tests/multi-select-list-tests/items" component={ItemsMultiSelectList} />
    <Route path="/tests/multi-select-list-tests/items-divided" component={ItemsDividedMultiSelectList} />
    <Route path="/tests/multi-select-list-tests/max-count" component={MaxCountMultiSelectList} />
    <Route path="/tests/multi-select-list-tests/on-change" component={OnChangeMultiSelectList} />
  </div>
);

export default routes;
