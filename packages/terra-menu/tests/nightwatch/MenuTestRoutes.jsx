/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import MenuTests from './MenuTests';
import DefaultMenu from './DefaultMenu';

const routes = (
  <div>
    <Route path="/tests/menu-tests" component={MenuTests} />
    <Route path="/tests/menu-tests/default" component={DefaultMenu} />
  </div>
);

export default routes;
