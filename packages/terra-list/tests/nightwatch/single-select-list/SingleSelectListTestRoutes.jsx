/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import SingleSelectListTests from './SingleSelectListTests';
import DefaultSingleSelectList from './DefaultSingleSelectList';
import ItemsSingleSelectList from './ItemsSingleSelectList';
import ItemsDividedSingleSelectList from './ItemsDividedSingleSelectList';
import ChevronSingleSelectList from './ChevronSingleSelectList';
import OnChangeSingleSelectList from './OnChangeSingleSelectList';

const routes = (
  <div>
    <Route path="/tests/single-select-list-tests" component={SingleSelectListTests} />
    <Route path="/tests/single-select-list-tests/default" component={DefaultSingleSelectList} />
    <Route path="/tests/single-select-list-tests/items" component={ItemsSingleSelectList} />
    <Route path="/tests/single-select-list-tests/items-divided" component={ItemsDividedSingleSelectList} />
    <Route path="/tests/single-select-list-tests/chevron" component={ChevronSingleSelectList} />
    <Route path="/tests/single-select-list-tests/on-change" component={OnChangeSingleSelectList} />
  </div>
);

export default routes;
