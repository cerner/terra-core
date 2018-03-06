/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import FieldsetTests from './FieldsetTests';

// Test Cases
import DefaultFieldset from './DefaultFieldset';
import PopulatedFieldset from './PopulatedFieldset';

const routes = (
  <div>
    <Route path="/tests/form-fieldset-tests" component={FieldsetTests} />
    <Route path="/tests/form-fieldset-tests/fieldset/default" component={DefaultFieldset} />
    <Route path="/tests/form-fieldset-tests/fieldset/populated" component={PopulatedFieldset} />
  </div>
);

export default routes;
