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
import IconOnly from './IconOnly';
import InitiallyOpen from './InitiallyOpen';
import OpenedButtonText from './OpenedButtonText';
import OnOpenCollapse from './OnOpenCollapse';
import OnCloseCollapse from './OnCloseCollapse';

const routes = (
  <div>
    <Route path="/tests/collapse-tests" component={CollapseTests} />
    <Route path="/tests/collapse-tests/default" component={DefaultCollapse} />
    <Route path="/tests/collapse-tests/customized-button" component={CustomizedButtonCollapse} />
    <Route path="/tests/collapse-tests/closed-button-text" component={ClosedButtonText} />
    <Route path="/tests/collapse-tests/customized-icon" component={CustomIcon} />
    <Route path="/tests/collapse-tests/animated" component={Animated} />
    <Route path="/tests/collapse-tests/icon-only" component={IconOnly} />
    <Route path="/tests/collapse-tests/initially-open" component={InitiallyOpen} />
    <Route path="/tests/collapse-tests/open-button-text" component={OpenedButtonText} />
    <Route path="/tests/collapse-tests/on-open-event" component={OnOpenCollapse} />
    <Route path="/tests/collapse-tests/on-close-event" component={OnCloseCollapse} />
  </div>
);

export default routes;
