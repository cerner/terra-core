/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import HookshotTests from './HookshotTests';

// Test Cases
import DefaultHookshot from './DefaultHookshot';
import HookshotCloseBehaviors from './components/HookshotCloseBehaviors';
import HookshotEnabledBehaviors from './components/HookshotEnabledBehaviors';
import HookshotContentOffset from './components/HookshotContentOffset';
import HookshotTargetOffset from './components/HookshotTargetOffset';

const routes = (
  <div>
    <Route path="/tests/hookshot-tests" component={HookshotTests} />
    <Route path="/tests/hookshot-tests/default" component={DefaultHookshot} />
    <Route path="/tests/hookshot-tests/close-behaviors" component={HookshotCloseBehaviors} />
    <Route path="/tests/hookshot-tests/content-offset" component={HookshotContentOffset} />
    <Route path="/tests/hookshot-tests/target-offset" component={HookshotTargetOffset} />
    <Route path="/tests/hookshot-tests/enabled-behaviors" component={HookshotEnabledBehaviors} />
  </div>
);

export default routes;
