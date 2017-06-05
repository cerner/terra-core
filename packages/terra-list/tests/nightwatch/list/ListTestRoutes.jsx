/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ListTests from './ListTests';
import DefaultList from './DefaultList';
import ItemsDividedList from './ItemsDividedList';
import ListOneItem from './ListOneItem';
import ListNoItems from './ListNoItems';


const routes = (
  <div>
    <Route path="/tests/list-tests" component={ListTests} />
    <Route path="/tests/list-tests/default" component={DefaultList} />
    <Route path="/tests/list-tests/items-divided" component={ItemsDividedList} />
    <Route path="/tests/list-tests/one-item" component={ListOneItem} />
    <Route path="/tests/list-tests/no-items" component={ListNoItems} />
  </div>
);

export default routes;
