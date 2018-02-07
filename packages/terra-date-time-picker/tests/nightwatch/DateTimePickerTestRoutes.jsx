/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import DateTimePickerTests from './DateTimePickerTests';
import DateTimePickerDefault from './components/DateTimePickerDefault';
import DateTimePickerDefaultDateOnly from './components/DateTimePickerDefaultDateOnly';
import DateTimePickerDefaultDateTime from './components/DateTimePickerDefaultDateTime';
import DateTimePickerDST from './components/DateTimePickerDST';
import DateTimePickerExcludeDates from './components/DateTimePickerExcludeDates';
import DateTimePickerFilterDates from './components/DateTimePickerFilterDates';
import DateTimePickerIncludeDates from './components/DateTimePickerIncludeDates';
import DateTimePickerMinMax from './components/DateTimePickerMinMax';
import DateTimePickerInsideModal from './components/DateTimePickerInsideModal';
import DateTimePickerOnChange from './components/DateTimePickerOnChange';
import DateTimePickerOnChangeRaw from './components/DateTimePickerOnChangeRaw';
import DateTimePickerDateInputAttributes from './components/DateTimePickerDateInputAttributes';
import DateTimePickerTimeInputAttributes from './components/DateTimePickerTimeInputAttributes';
import DateTimePickerDefaultDateExcluded from './components/DateTimePickerDefaultDateExcluded';
import DateTimePickerDefaultDateOutOfRange from './components/DateTimePickerDefaultDateOutOfRange';
import DateTimePickerDisabled from './components/DateTimePickerDisabled';

const routes = (
  <div>
    <Route path="/tests/date-time-picker-tests" component={DateTimePickerTests} />
    <Route path="/tests/date-time-picker-tests/default" component={DateTimePickerDefault} />
    <Route path="/tests/date-time-picker-tests/date-only" component={DateTimePickerDefaultDateOnly} />
    <Route path="/tests/date-time-picker-tests/date-time" component={DateTimePickerDefaultDateTime} />
    <Route path="/tests/date-time-picker-tests/dst" component={DateTimePickerDST} />
    <Route path="/tests/date-time-picker-tests/exclude-dates" component={DateTimePickerExcludeDates} />
    <Route path="/tests/date-time-picker-tests/filter-dates" component={DateTimePickerFilterDates} />
    <Route path="/tests/date-time-picker-tests/include-dates" component={DateTimePickerIncludeDates} />
    <Route path="/tests/date-time-picker-tests/min-max" component={DateTimePickerMinMax} />
    <Route path="/tests/date-time-picker-tests/inside-modal" component={DateTimePickerInsideModal} />
    <Route path="/tests/date-time-picker-tests/on-change" component={DateTimePickerOnChange} />
    <Route path="/tests/date-time-picker-tests/on-change-raw" component={DateTimePickerOnChangeRaw} />
    <Route path="/tests/date-time-picker-tests/date-input-attributes" component={DateTimePickerDateInputAttributes} />
    <Route path="/tests/date-time-picker-tests/time-input-attributes" component={DateTimePickerTimeInputAttributes} />
    <Route path="/tests/date-time-picker-tests/default-date-excluded" component={DateTimePickerDefaultDateExcluded} />
    <Route path="/tests/date-time-picker-tests/default-date-out-of-range" component={DateTimePickerDefaultDateOutOfRange} />
    <Route path="/tests/date-time-picker-tests/disabled" component={DateTimePickerDisabled} />
  </div>
);

export default routes;
