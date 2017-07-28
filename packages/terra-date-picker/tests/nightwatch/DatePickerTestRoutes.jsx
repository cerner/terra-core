/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import DatePickerTests from './DatePickerTests';
import DatePickerDefault from './components/DatePickerDefault';
import DatePickerExcludeDates from './components/DatePickerExcludeDates';
import DatePickerFilterDates from './components/DatePickerFilterDates';
import DatePickerIncludeDates from './components/DatePickerIncludeDates';
import DatePickerMinMax from './components/DatePickerMinMax';
import DatePickerOnChange from './components/DatePickerOnChange';
import DatePickerStartDate from './components/DatePickerStartDate';
import DatePickerInsideModal from './components/DatePickerInsideModal';

const routes = (
  <div>
    <Route path="/tests/date-picker-tests" component={DatePickerTests} />
    <Route path="/tests/date-picker-tests/default" component={DatePickerDefault} />
    <Route path="/tests/date-picker-tests/exclude-dates" component={DatePickerExcludeDates} />
    <Route path="/tests/date-picker-tests/filter-dates" component={DatePickerFilterDates} />
    <Route path="/tests/date-picker-tests/include-dates" component={DatePickerIncludeDates} />
    <Route path="/tests/date-picker-tests/min-max" component={DatePickerMinMax} />
    <Route path="/tests/date-picker-tests/on-change" component={DatePickerOnChange} />
    <Route path="/tests/date-picker-tests/start-date" component={DatePickerStartDate} />
    <Route path="/tests/date-picker-tests/inside-modal" component={DatePickerInsideModal} />
  </div>
);

export default routes;
