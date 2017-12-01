/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import RadioTests from './RadioTests';

// Test Cases
import DefaultRadio from './DefaultRadio';

const routes = (
  <div>
    <Route path="/tests/form-radio-tests" component={RadioTests} />
    <Route path="/tests/form-radio-tests/default" component={DefaultRadio} />
  </div>
);

export default routes;
