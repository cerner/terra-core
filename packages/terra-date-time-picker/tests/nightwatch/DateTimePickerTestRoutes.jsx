/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import DateTimePickerTests from './DateTimePickerTests';
import DateTimePickerDefault from './components/DateTimePickerDefault';
import DateTimePickerExcludeDates from './components/DateTimePickerExcludeDates';
import DateTimePickerFilterDates from './components/DateTimePickerFilterDates';
import DateTimePickerIncludeDates from './components/DateTimePickerIncludeDates';
import DateTimePickerMinMax from './components/DateTimePickerMinMax';
import DateTimePickerInsideModal from './components/DateTimePickerInsideModal';

const routes = (
  <div>
    <Route path="/tests/date-time-picker-tests" component={DateTimePickerTests} />
    <Route path="/tests/date-time-picker-tests/default" component={DateTimePickerDefault} />
    <Route path="/tests/date-time-picker-tests/exclude-dates" component={DateTimePickerExcludeDates} />
    <Route path="/tests/date-time-picker-tests/filter-dates" component={DateTimePickerFilterDates} />
    <Route path="/tests/date-time-picker-tests/include-dates" component={DateTimePickerIncludeDates} />
    <Route path="/tests/date-time-picker-tests/min-max" component={DateTimePickerMinMax} />
    <Route path="/tests/date-time-picker-tests/inside-modal" component={DateTimePickerInsideModal} />
  </div>
);

export default routes;
