/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import HookshotTests from './HookshotTests';

// Test Cases
import DefaultHookshot from './DefaultHookshot';

const routes = (
  <div>
    <Route path="/tests/hookshot-tests" component={HookshotTests} />
    <Route path="/tests/hookshot-tests/default" component={DefaultHookshot} />
  </div>
);

export default routes;
