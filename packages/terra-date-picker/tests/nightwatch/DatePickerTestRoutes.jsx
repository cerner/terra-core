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
import DatePickerOnChangeRaw from './components/DatePickerOnChangeRaw';
import DatePickerOnClickOutside from './components/DatePickerOnClickOutside';
import DatePickerOnSelect from './components/DatePickerOnSelect';
import DatePickerStartDate from './components/DatePickerStartDate';
import DatePickerInsideModal from './components/DatePickerInsideModal';
import DatePickerDefaultDateExcluded from './components/DatePickerDefaultDateExcluded';
import DatePickerDefaultDateOutOfRange from './components/DatePickerDefaultDateOutOfRange';
import { DatePickerDisabledDate, DatePickerReadonlyDate } from './components/DatePickerInputAttributes';

const routes = (
  <div>
    <Route path="/tests/date-picker-tests" component={DatePickerTests} />
    <Route path="/tests/date-picker-tests/default" component={DatePickerDefault} />
    <Route path="/tests/date-picker-tests/exclude-dates" component={DatePickerExcludeDates} />
    <Route path="/tests/date-picker-tests/filter-dates" component={DatePickerFilterDates} />
    <Route path="/tests/date-picker-tests/include-dates" component={DatePickerIncludeDates} />
    <Route path="/tests/date-picker-tests/min-max" component={DatePickerMinMax} />
    <Route path="/tests/date-picker-tests/on-change" component={DatePickerOnChange} />
    <Route path="/tests/date-picker-tests/on-change-raw" component={DatePickerOnChangeRaw} />
    <Route path="/tests/date-picker-tests/on-click-outside" component={DatePickerOnClickOutside} />
    <Route path="/tests/date-picker-tests/on-select" component={DatePickerOnSelect} />
    <Route path="/tests/date-picker-tests/start-date" component={DatePickerStartDate} />
    <Route path="/tests/date-picker-tests/inside-modal" component={DatePickerInsideModal} />
    <Route path="/tests/date-picker-tests/default-date-excluded" component={DatePickerDefaultDateExcluded} />
    <Route path="/tests/date-picker-tests/default-date-out-of-range" component={DatePickerDefaultDateOutOfRange} />
    <Route path="/tests/date-picker-tests/disabled" component={DatePickerDisabledDate} />
    <Route path="/tests/date-picker-tests/readonly" component={DatePickerReadonlyDate} />
  </div>
);

export default routes;
