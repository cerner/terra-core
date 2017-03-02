/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import MultiSelectListTests from './MultiSelectListTests';
import DefaultMultiSelectList from './DefaultMultiSelectList';

const routes = (
  <div>
    <Route path="/tests/multi-select-list-tests" component={MultiSelectListTests} />
    <Route path="/tests/multi-select-list-tests/default" component={DefaultMultiSelectList} />
  </div>
);

export default routes;
