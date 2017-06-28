/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ToggleButtonTests from './ToggleButtonTests';

// Test Cases
import Animated from './Animated';
import ClosedButtonText from './ClosedButtonText';
import CustomIcon from './CustomIcon';
import CustomizedButtonToggleButton from './CustomizedButtonToggleButton';
import DefaultToggleButton from './DefaultToggleButton';
import IconAnimated from './IconAnimated';
import IconOnly from './IconOnly';
import InitiallyOpen from './InitiallyOpen';
import OpenedButtonText from './OpenedButtonText';
import OnOpenToggleButton from './OnOpenToggleButton';
import OnCloseToggleButton from './OnCloseToggleButton';

const routes = (
  <div>
    <Route path="/tests/toggle-button-tests" component={ToggleButtonTests} />
    <Route path="/tests/toggle-button-tests/default" component={DefaultToggleButton} />
    <Route path="/tests/toggle-button-tests/customized-button" component={CustomizedButtonToggleButton} />
    <Route path="/tests/toggle-button-tests/closed-button-text" component={ClosedButtonText} />
    <Route path="/tests/toggle-button-tests/customized-icon" component={CustomIcon} />
    <Route path="/tests/toggle-button-tests/animated" component={Animated} />
    <Route path="/tests/toggle-button-tests/icon-animated" component={IconAnimated} />
    <Route path="/tests/toggle-button-tests/icon-only" component={IconOnly} />
    <Route path="/tests/toggle-button-tests/initially-open" component={InitiallyOpen} />
    <Route path="/tests/toggle-button-tests/open-button-text" component={OpenedButtonText} />
    <Route path="/tests/toggle-button-tests/on-open-event" component={OnOpenToggleButton} />
    <Route path="/tests/toggle-button-tests/on-close-event" component={OnCloseToggleButton} />
  </div>
);

export default routes;
