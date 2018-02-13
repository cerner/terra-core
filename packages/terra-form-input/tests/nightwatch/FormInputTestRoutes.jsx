/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import FormInputTests from './FormInputTests';

// Test Cases
import {
  DefaultFormInput,
  InvalidFormInput,
  DisabledFormInput,
} from './FormInputPropPermutations';

const routes = (
  <div>
    <Route path="/tests/form-input-tests" component={FormInputTests} />
    <Route path="/tests/form-input-tests/default" component={DefaultFormInput} />
    <Route path="/tests/form-input-tests/invalid" component={InvalidFormInput} />
    <Route path="/tests/form-input-tests/disabled" component={DisabledFormInput} />
  </div>
);

export default routes;
