/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import CheckboxTests from './CheckboxTests';

// Test Cases
import DefaultCheckbox from './DefaultCheckbox';
import DisabledCheckbox from './DisabledCheckbox';
import PopulatedCheckbox from './PopulatedCheckbox';
import LongTextCheckbox from './LongTextCheckbox';
import MultipleCheckboxes from './MultipleCheckboxes';

const routes = (
  <div>
    <Route path="/tests/checkbox-tests" component={CheckboxTests} />
    <Route path="/tests/checkbox-tests/default" component={DefaultCheckbox} />
    <Route path="/tests/checkbox-tests/disabled" component={DisabledCheckbox} />
    <Route path="/tests/checkbox-tests/populated" component={PopulatedCheckbox} />
    <Route path="/tests/checkbox-tests/longText" component={LongTextCheckbox} />
    <Route path="tests/checkbox-tests/multiple" component={MultipleCheckboxes} />
  </div>
);

export default routes;
