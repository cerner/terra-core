/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import FormTests from './FieldTests';

import FieldCombinations from './FieldCombinations';
import FieldInteractiveInvalid from './FieldInteractiveInvalid';
import FieldTextWrap from './FieldTextWrap';
import FieldInline from './FieldInline';

const routes = (
  <div>
    <Route path="/tests/form-field-tests" component={FormTests} />
    <Route path="/tests/form-field-tests/combinations" component={FieldCombinations} />
    <Route path="/tests/form-field-tests/is-invalid" component={FieldInteractiveInvalid} />
    <Route path="/tests/form-field-tests/text-wrap" component={FieldTextWrap} />
    <Route path="/tests/form-field-tests/inline" component={FieldInline} />
  </div>
);

export default routes;
