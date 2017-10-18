/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import HorizontalDividerTests from './HorizontalDividerTests';

// Test Cases
import DefaultHorizontalDivider from './DefaultHorizontalDivider';

const routes = (
  <div>
    <Route path="/tests/horizontal-divider-tests" component={HorizontalDividerTests} />
    <Route path="/tests/horizontal-divider-tests/default" component={DefaultHorizontalDivider} />
  </div>
);

export default routes;
