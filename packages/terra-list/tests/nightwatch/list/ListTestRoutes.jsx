/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ListTests from './ListTests';
import DefaultList from './DefaultList';
import ItemsDividedList from './ItemsDividedList';

const routes = (
  <div>
    <Route path="/tests/list-tests" component={ListTests} />
    <Route path="/tests/list-tests/default" component={DefaultList} />
    <Route path="/tests/list-tests/items-divided" component={ItemsDividedList} />
  </div>
);

export default routes;
