/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import PaginatorTests from './PaginatorTests';

// Test Cases
import DefaultPaginator from './DefaultPaginator';

const routes = (
  <div>
    <Route path="/tests/paginator-tests" component={PaginatorTests} />
    <Route path="/tests/paginator-tests/default" component={DefaultPaginator} />
  </div>
);

export default routes;
