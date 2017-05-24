/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import LoadingOverlayTests from './LoadingOverlayTests';

// Test Cases
import DefaultLoadingOverlay from './DefaultLoadingOverlay';

const routes = (
  <div>
    <Route path="/tests/loading-overlay-tests" component={LoadingOverlayTests} />
    <Route path="/tests/loading-overlay-tests/default" component={DefaultLoadingOverlay} />
  </div>
);

export default routes;
