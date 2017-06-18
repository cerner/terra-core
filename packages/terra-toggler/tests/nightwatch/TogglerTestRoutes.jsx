/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import TogglerTests from './TogglerTests';

// Test Cases
import DefaultToggler from './DefaultToggler';

const routes = (
  <div>
    <Route path="/tests/toggler-tests" component={TogglerTests} />
    <Route path="/tests/toggler-tests/default" component={DefaultToggler} />
  </div>
);

export default routes;
