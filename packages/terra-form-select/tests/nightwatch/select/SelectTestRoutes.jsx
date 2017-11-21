/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import SelectTests from './SelectTests';

// Test Cases
import DefaultSelect from './DefaultSelect';
import ControlledSelect from './ControlledSelect';
import DisabledSelect from './DisabledSelect';
import SelectLongText from './SelectLongText';
import InvalidSelect from './InvalidSelect';

const routes = (
  <div>
    <Route path="/tests/select-tests" component={SelectTests} />
    <Route path="/tests/select-tests/default" component={DefaultSelect} />
    <Route path="/tests/select-tests/controlled" component={ControlledSelect} />
    <Route path="/tests/select-tests/disabled" component={DisabledSelect} />
    <Route path="/tests/select-tests/long-text" component={SelectLongText} />
    <Route path="/tests/select-tests/invalid" component={InvalidSelect} />
  </div>
);

export default routes;
