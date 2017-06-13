/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import AlertTests from './AlertTests';

// Test Cases
import DefaultAlert from './DefaultAlert';

const routes = (
  <div>
    <Route path="/tests/alert-tests" component={AlertTests} />
    <Route path="/tests/alert-tests/default" component={DefaultAlert} />
  </div>
);

export default routes;
