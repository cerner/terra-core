/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import TogglerTests from './TogglerTests';
import TogglerDefault from './TogglerDefault';

const routes = (
  <div>
    <Route path="/tests/toggler-tests" component={TogglerTests} />
    <Route path="/tests/toggler-tests/default" component={TogglerDefault} />
  </div>
);

export default routes;
