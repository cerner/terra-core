/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import BaseTests from './BaseTests';
import DefaultBase from './DefaultBase';

const routes = (
  <div>
    <Route path="/tests/base-tests" component={BaseTests} />
    <Route path="/tests/base-tests/default" component={DefaultBase} />
  </div>
);

export default routes;
