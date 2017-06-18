/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import CollapseTests from './CollapseTests';

// Test Cases
import DefaultCollapse from './DefaultCollapse';

const routes = (
  <div>
    <Route path="/tests/collapse-tests" component={CollapseTests} />
    <Route path="/tests/collapse-tests/default" component={DefaultCollapse} />
  </div>
);

export default routes;
