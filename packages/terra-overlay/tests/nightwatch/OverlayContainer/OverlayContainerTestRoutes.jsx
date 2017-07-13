/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import OverlayContainerTests from './OverlayContainerTests';

// Test Cases
import DefaultOverlayContainer from './DefaultOverlayContainer';

const routes = (
  <div>
    <Route path="/tests/overlay-container-tests" component={OverlayContainerTests} />
    <Route path="/tests/overlay-container-tests/default" component={DefaultOverlayContainer} />
  </div>
);

export default routes;
