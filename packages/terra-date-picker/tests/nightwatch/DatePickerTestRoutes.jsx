/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import DatePickerTests from './DatePickerTests';
import DefaultDatePicker from './DefaultDatePicker';

const routes = (
  <div>
    <Route path="/tests/date-picker-tests" component={DatePickerTests} />
    <Route path="/tests/date-picker-tests/default" component={DefaultDatePicker} />
  </div>
);

export default routes;
