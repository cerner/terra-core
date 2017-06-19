/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import CollapseTests from './CollapseTests';

// Test Cases
import Animated from './Animated';
import ClosedButtonText from './ClosedButtonText';
import CustomIcon from './CustomIcon';
import CustomizedButtonCollapse from './CustomizedButtonCollapse';
import DefaultCollapse from './DefaultCollapse';
import InitiallyOpen from './InitiallyOpen';
import OpenedButtonText from './OpenedButtonText';

const routes = (
  <div>
    <Route path="/tests/collapse-tests" component={CollapseTests} />
    <Route path="/tests/collapse-tests/default" component={DefaultCollapse} />
    <Route path="/tests/collapse-tests/customized-button" component={CustomizedButtonCollapse} />
    <Route path="/tests/collapse-tests/closed-button-text" component={ClosedButtonText} />
    <Route path="/tests/collapse-tests/customized-icon" component={CustomIcon} />
    <Route path="/tests/collapse-tests/animated" component={Animated} />
    <Route path="/tests/collapse-tests/initially-open" component={InitiallyOpen} />
    <Route path="/tests/collapse-tests/open-button-text" component={OpenedButtonText} />
  </div>
);

export default routes;
