/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ActionHeaderTests from './ActionHeaderTests';

// Test Cases
import DefaultActionHeader from './DefaultActionHeader';
import BackActionHeader from './BackActionHeader';
import BackCloseActionHeader from './BackCloseActionHeader';
import KeepCloseActionHeader from './KeepCloseActionHeader';
import CustomButtonActionHeader from './CustomButtonActionHeader';

const routes = (
  <div>
    <Route path="/tests/action-header-tests" component={ActionHeaderTests} />
    <Route path="/tests/action-header-tests/default-action-header" component={DefaultActionHeader} />
    <Route path="/tests/action-header-tests/back-action-header" component={BackActionHeader} />
    <Route path="/tests/action-header-tests/back-close-action-header" component={BackCloseActionHeader} />
    <Route path="/tests/action-header-tests/keep-close-action-header" component={KeepCloseActionHeader} />
    <Route path="/tests/action-header-tests/custom-button-action-header" component={CustomButtonActionHeader} />
  </div>
);

export default routes;
