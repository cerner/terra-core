/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import AlertTests from './AlertTests';

// Test Cases
import DefaultAlert from './DefaultAlert';
import AlertType from './AlertType';
import AlertTitle from './AlertTitle';
import CustomAlert from './CustomAlert';
import AlertActionButton from './AlertActionButton';
import AlertDismissible from './AlertDismissible';

const routes = (
  <div>
    <Route path="/tests/alert-tests" component={AlertTests} />
    <Route path="/tests/alert-tests/default" component={DefaultAlert} />
    <Route path="/tests/alert-tests/type" component={AlertType} />
    <Route path="/tests/alert-tests/title" component={AlertTitle} />
    <Route path="/tests/alert-tests/custom" component={CustomAlert} />
    <Route path="/tests/alert-tests/actionButton" component={AlertActionButton} />
    <Route path="/tests/alert-tests/dismissible" component={AlertDismissible} />
  </div>
);

export default routes;
