/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ToggleTests from './ToggleTests';

// Test Cases
import DefaultToggle from './DefaultToggle';
import AnimatedToggle from './AnimatedToggle';
import OpenToggle from './OpenToggle';

const routes = (
  <div>
    <Route path="/tests/toggle-tests" component={ToggleTests} />
    <Route path="/tests/toggle-tests/default" component={DefaultToggle} />
    <Route path="/tests/toggle-tests/animated" component={AnimatedToggle} />
    <Route path="/tests/toggle-tests/open" component={OpenToggle} />
  </div>
);

export default routes;
