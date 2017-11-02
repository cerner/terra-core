/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import DividerTests from './DividerTests';

// Test Cases
import DefaultDivider from './DefaultDivider';

const routes = (
  <div>
    <Route path="/tests/divider-tests" component={DividerTests} />
    <Route path="/tests/divider-tests/default" component={DefaultDivider} />
  </div>
);

export default routes;
