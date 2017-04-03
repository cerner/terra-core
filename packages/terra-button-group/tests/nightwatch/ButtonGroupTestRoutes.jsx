/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ButtonGroupTests from './ButtonGroupTests';
import DefaultButtonGroup from './DefaultButtonGroup';

const routes = (
  <div>
    <Route path="/tests/button-group-tests" component={ButtonGroupTests} />
    <Route path="/tests/button-group-tests/default" component={DefaultButtonGroup} />
  </div>
);

export default routes;
