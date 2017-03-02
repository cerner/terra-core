/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import SingleSelectListTests from './SingleSelectListTests';
import DefaultSingleSelectList from './DefaultSingleSelectList';

const routes = (
  <div>
    <Route path="/tests/single-select-list-tests" component={SingleSelectListTests} />
    <Route path="/tests/single-select-list-tests/default" component={DefaultSingleSelectList} />
  </div>
);

export default routes;
