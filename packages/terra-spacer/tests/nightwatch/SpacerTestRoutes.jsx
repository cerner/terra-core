/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import SpacerTests from './SpacerTests';

// Test Cases
import DefaultSpacer from './DefaultSpacer';

const routes = (
  <div>
    <Route path="/tests/spacer-tests" component={SpacerTests} />
    <Route path="/tests/spacer-tests/default" component={DefaultSpacer} />
  </div>
);

export default routes;
