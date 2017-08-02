/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import DynamicGridTests from './DynamicGridTests';

// Test Cases
import DefaultDynamicGrid from './DefaultDynamicGrid';

const routes = (
  <div>
    <Route path="/tests/dynamic-grid-tests" component={DynamicGridTests} />
    <Route path="/tests/dynamic-grid-tests/default" component={DefaultDynamicGrid} />
  </div>
);

export default routes;
