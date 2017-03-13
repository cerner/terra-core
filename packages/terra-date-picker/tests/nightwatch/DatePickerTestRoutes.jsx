/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import DatePickerTests from './DatePickerTests';
import DatePickerDefault from './components/DatePickerDefault';
import DatePickerCustomInput from './components/DatePickerCustomInput';
import DatePickerExcludeDates from './components/DatePickerExcludeDates';
import DatePickerFilterDates from './components/DatePickerFilterDates';
import DatePickerHideMonthYearDropdown from './components/DatePickerHideMonthYearDropdown';
import DatePickerHideTodayButton from './components/DatePickerHideTodayButton';
import DatePickerHighlightDates from './components/DatePickerHighlightDates';
import DatePickerIncludeDates from './components/DatePickerIncludeDates';
import DatePickerMinMax from './components/DatePickerMinMax';
import DatePickerMulitpleMonths from './components/DatePickerMulitpleMonths';
import DatePickerOnChange from './components/DatePickerOnChange';
import DatePickerOpenToDate from './components/DatePickerOpenToDate';
import DatePickerPortal from './components/DatePickerPortal';
import DatePickerStartDate from './components/DatePickerStartDate';
import DatePickerTodayButton from './components/DatePickerTodayButton';
import DateRange from './components/DateRange';

const routes = (
  <div>
    <Route path="/tests/date-picker-tests" component={DatePickerTests} />
    <Route path="/tests/date-picker-tests/default" component={DatePickerDefault} />
    <Route path="/tests/date-picker-tests/custom-input" component={DatePickerCustomInput} />
    <Route path="/tests/date-picker-tests/exclude-dates" component={DatePickerExcludeDates} />
    <Route path="/tests/date-picker-tests/filter-dates" component={DatePickerFilterDates} />
    <Route path="/tests/date-picker-tests/hide-month-year-dropdown" component={DatePickerHideMonthYearDropdown} />
    <Route path="/tests/date-picker-tests/hide-today-button" component={DatePickerHideTodayButton} />
    <Route path="/tests/date-picker-tests/highlight-dates" component={DatePickerHighlightDates} />
    <Route path="/tests/date-picker-tests/include-dates" component={DatePickerIncludeDates} />
    <Route path="/tests/date-picker-tests/min-max" component={DatePickerMinMax} />
    <Route path="/tests/date-picker-tests/mulitple-months" component={DatePickerMulitpleMonths} />
    <Route path="/tests/date-picker-tests/on-change" component={DatePickerOnChange} />
    <Route path="/tests/date-picker-tests/open-to-dates" component={DatePickerOpenToDate} />
    <Route path="/tests/date-picker-tests/portal" component={DatePickerPortal} />
    <Route path="/tests/date-picker-tests/start-dates" component={DatePickerStartDate} />
    <Route path="/tests/date-picker-tests/today-button" component={DatePickerTodayButton} />
    <Route path="/tests/date-picker-tests/date-range" component={DateRange} />
  </div>
);

export default routes;
