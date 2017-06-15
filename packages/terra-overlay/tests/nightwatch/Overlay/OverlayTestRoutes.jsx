/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import OverlayTests from './OverlayTests';

// Test Cases
import DefaultOverlay from './DefaultOverlay';
import ContainerOverlay from './ContainerOverlay';
import CustomContentOverlay from './CustomContentOverlay';
import ContainerScrollableOverlay from './ContainerScrollableOverlay';
import FullscreenScrollableOverlay from './FullscreenScrollableOverlay';
import OnRequestCloseOverlay from './OnRequestCloseOverlay';
import LightOverlay from './LightOverlay';
import DarkOverlay from './DarkOverlay';
import ClearOverlay from './ClearOverlay';

const routes = (
  <div>
    <Route path="/tests/overlay-tests" component={OverlayTests} />
    <Route path="/tests/overlay-tests/default" component={DefaultOverlay} />
    <Route path="/tests/overlay-tests/container" component={ContainerOverlay} />
    <Route path="/tests/overlay-tests/custom-content" component={CustomContentOverlay} />
    <Route path="/tests/overlay-tests/container-scrollable" component={ContainerScrollableOverlay} />
    <Route path="/tests/overlay-tests/fullscreen-scrollable" component={FullscreenScrollableOverlay} />
    <Route path="/tests/overlay-tests/on-request-close" component={OnRequestCloseOverlay} />
    <Route path="/tests/overlay-tests/light-themed" component={LightOverlay} />
    <Route path="/tests/overlay-tests/dark-themed" component={DarkOverlay} />
    <Route path="/tests/overlay-tests/clear-themed" component={ClearOverlay} />
  </div>
);

export default routes;
