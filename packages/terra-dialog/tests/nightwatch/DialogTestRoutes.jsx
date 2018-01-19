/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import DialogTests from './DialogTests';

// Test Cases
import DefaultDialog from './DefaultDialog';

const routes = (
  <div>
    <Route path="/tests/dialog-tests" component={DialogTests} />
    <Route path="/tests/dialog-tests/default" component={DefaultDialog} />
  </div>
);

export default routes;
