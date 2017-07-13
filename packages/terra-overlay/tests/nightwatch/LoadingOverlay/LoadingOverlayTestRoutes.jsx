/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import LoadingOverlayTests from './LoadingOverlayTests';

// Test Cases
import DefaultLoadingOverlay from './DefaultLoadingOverlay';
import ContainerLoadingOverlay from './ContainerLoadingOverlay';
import CustomMessageLoadingOverlay from './CustomMessageLoadingOverlay';
import AnimatedLoadingOverlay from './AnimatedLoadingOverlay';
import LightLoadingOverlay from './LightLoadingOverlay';
import DarkLoadingOverlay from './DarkLoadingOverlay';
import ClearLoadingOverlay from './ClearLoadingOverlay';

const routes = (
  <div>
    <Route path="/tests/loading-overlay-tests" component={LoadingOverlayTests} />
    <Route path="/tests/loading-overlay-tests/default" component={DefaultLoadingOverlay} />
    <Route path="/tests/loading-overlay-tests/container" component={ContainerLoadingOverlay} />
    <Route path="/tests/loading-overlay-tests/custom-message" component={CustomMessageLoadingOverlay} />
    <Route path="/tests/loading-overlay-tests/animated" component={AnimatedLoadingOverlay} />
    <Route path="/tests/loading-overlay-tests/light-themed" component={LightLoadingOverlay} />
    <Route path="/tests/loading-overlay-tests/dark-themed" component={DarkLoadingOverlay} />
    <Route path="/tests/loading-overlay-tests/clear-themed" component={ClearLoadingOverlay} />
  </div>
);

export default routes;
