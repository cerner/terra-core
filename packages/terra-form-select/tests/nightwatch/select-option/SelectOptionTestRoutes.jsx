/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import SelectOptionTests from './SelectOptionTests';

// Test Cases
import DefaultSelectOption from './DefaultSelectOption';
import DisabledSelectOption from './DisabledSelectOption';
import SelectedSelectOption from './SelectedSelectOption';
import SelectOptionLongText from './SelectOptionLongText';
import SelectOptionWithChildren from './SelectOptionWithChildren';

const routes = (
  <div>
    <Route path="/tests/select-option-tests" component={SelectOptionTests} />
    <Route path="/tests/select-option-tests/default" component={DefaultSelectOption} />
    <Route path="/tests/select-option-tests/disabled" component={DisabledSelectOption} />
    <Route path="/tests/select-option-tests/selected" component={SelectedSelectOption} />
    <Route path="/tests/select-option-tests/long-text" component={SelectOptionLongText} />
    <Route path="/tests/select-option-tests/children" component={SelectOptionWithChildren} />
  </div>
);

export default routes;
