/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import InputTests from './InputTests';

// Test Cases
import {
  DefaultInput,
  InvalidInput,
  DisabledInput,
  OnChangeInput,
  OnBlurInput,
  OnFocusInput,
  RequiredInput,
  FocussedInput,
} from './InputPropPermutations';

const routes = (
  <div>
    <Route path="/tests/form-input-tests" component={InputTests} />
    <Route path="/tests/form-input-tests/default" component={DefaultInput} />
    <Route path="/tests/form-input-tests/invalid" component={InvalidInput} />
    <Route path="/tests/form-input-tests/disabled" component={DisabledInput} />
    <Route path="/tests/form-input-tests/onChangeInput" component={OnChangeInput} />
    <Route path="/tests/form-input-tests/onBlurInput" component={OnBlurInput} />
    <Route path="/tests/form-input-tests/onFocusInput" component={OnFocusInput} />
    <Route path="/tests/form-input-tests/required" component={RequiredInput} />
    <Route path="/tests/form-input-tests/focussed" component={FocussedInput} />
  </div>
);

export default routes;
