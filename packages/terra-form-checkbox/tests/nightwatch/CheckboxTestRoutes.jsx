/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import CheckboxTests from './CheckboxTests';

// Test Cases
import DefaultCheckbox from './DefaultCheckbox';
import PopulatedCheckbox from './PopulatedCheckbox';
import MultipleCheckboxes from './MultipleCheckboxes';

const routes = (
  <div>
    <Route path="/tests/checkbox-tests" component={CheckboxTests} />
    <Route path="/tests/checkbox-tests/default" component={DefaultCheckbox} />
    <Route path="/tests/checkbox-tests/populated" component={PopulatedCheckbox} />
    <Route path="tests/checkbox-tests/multiple" component={MultipleCheckboxes} />
  </div>
);

export default routes;
