/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import RadioTests from './RadioTests';

// Test Cases
import DefaultRadio from './DefaultRadio';
import DisabledRadio from './DisabledRadio';
import HiddenRadio from './HiddenRadio';
import PopulatedRadio from './PopulatedRadio';
import LongTextRadio from './LongTextRadio';
import MultipleRadio from './MultipleRadios';

const routes = (
  <div>
    <Route path="/tests/form-radio-tests" component={RadioTests} />
    <Route path="/tests/form-radio-tests/default" component={DefaultRadio} />
    <Route path="/tests/form-radio-tests/disabled" component={DisabledRadio} />
    <Route path="/tests/form-radio-tests/hidden" component={HiddenRadio} />
    <Route path="/tests/form-radio-tests/populated" component={PopulatedRadio} />
    <Route path="/tests/form-radio-tests/long-text" component={LongTextRadio} />
    <Route path="/tests/form-radio-tests/multiple" component={MultipleRadio} />
  </div>
);

export default routes;
