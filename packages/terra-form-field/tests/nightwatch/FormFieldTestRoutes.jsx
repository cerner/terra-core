/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import FormFieldTests from './FormFieldTests';

// Test Cases
import DefaultFormField from './DefaultFormField';

const routes = (
  <div>
    <Route path="/tests/form-field-tests" component={FormFieldTests} />
    <Route path="/tests/form-field-tests/default" component={DefaultFormField} />
  </div>
);

export default routes;
