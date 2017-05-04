/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import FormTests from './FormTests';
import DefaultForm from './DefaultForm';

const routes = (
  <div>
    <Route path="/tests/form-tests" component={FormTests} />
    <Route path="/tests/form-tests/default" component={DefaultForm} />
  </div>
);

export default routes;
