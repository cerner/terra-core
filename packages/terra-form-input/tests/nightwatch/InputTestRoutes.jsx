/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import InputTests from './InputTests';

// Test Cases
import {
  DefaultInput,
  InvalidInput,
  DisabledInput,
} from './InputPropPermutations';

const routes = (
  <div>
    <Route path="/tests/form-input-tests" component={InputTests} />
    <Route path="/tests/form-input-tests/default" component={DefaultInput} />
    <Route path="/tests/form-input-tests/invalid" component={InvalidInput} />
    <Route path="/tests/form-input-tests/disabled" component={DisabledInput} />
  </div>
);

export default routes;
