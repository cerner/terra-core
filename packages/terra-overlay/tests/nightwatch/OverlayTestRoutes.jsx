/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import OverlayTests from './OverlayTests';
import DefaultOverlay from './DefaultOverlay';

const routes = (
  <div>
    <Route path="/tests/overlay-tests" component={OverlayTests} />
    <Route path="/tests/overlay-tests/default" component={DefaultOverlay} />
  </div>
);

export default routes;
