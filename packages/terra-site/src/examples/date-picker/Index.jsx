import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-date-picker/docs/README.md';
import './Index.scss';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import DatePickerSrc from '!raw-loader!terra-date-picker/src/DatePicker';
// Example Files
import DatePickerDefault from './DatePickerDefault';
import DatePickerCustomInput from './DatePickerCustomInput';
import DatePickerExcludeDates from './DatePickerExcludeDates';
import DatePickerFilterDates from './DatePickerFilterDates';
import DatePickerHideMonthYearDropdown from './DatePickerHideMonthYearDropdown';
import DatePickerHideTodayButton from './DatePickerHideTodayButton';
import DatePickerHighlightDates from './DatePickerHighlightDates';
import DatePickerIncludeDates from './DatePickerIncludeDates';
import DatePickerMinMax from './DatePickerMinMax';
import DatePickerMulitpleMonths from './DatePickerMulitpleMonths';
import DatePickerOnChange from './DatePickerOnChange';
import DatePickerOpenToDate from './DatePickerOpenToDate';
import DatePickerPortal from './DatePickerPortal';
import DatePickerStartDate from './DatePickerStartDate';
import DatePickerTodayButton from './DatePickerTodayButton';
import DatePickerRange from './DatePickerRange';

const DatePickerExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={DatePickerSrc} />
    <h2 id="default">Default</h2>
    <DatePickerDefault />
    <h2 id="custom-input">Custom Input</h2>
    <DatePickerCustomInput />
    <h2 id="exclude-dates">ExcludeDates</h2>
    <DatePickerExcludeDates />
    <h2 id="filter-dates">FilterDates</h2>
    <DatePickerFilterDates />
    <h2 id="hide-month-year-dropdown">Hide Month/Year Dropdown</h2>
    <DatePickerHideMonthYearDropdown />
    <h2 id="hide-today-button">Hide Today Button</h2>
    <DatePickerHideTodayButton />
    <h2 id="highlight-dates">Highlight Dates</h2>
    <DatePickerHighlightDates />
    <h2 id="include-dates">Include Dates</h2>
    <DatePickerIncludeDates />
    <h2 id="min-max">Min Max</h2>
    <DatePickerMinMax />
    <h2 id="mulitple-months">Mulitple Months</h2>
    <DatePickerMulitpleMonths />
    <h2 id="on-change">On Change</h2>
    <DatePickerOnChange />
    <h2 id="open-to-date">Open To Date</h2>
    <DatePickerOpenToDate />
    <h2 id="portal">Portal</h2>
    <DatePickerPortal />
    <h2 id="start-date">Start Date</h2>
    <DatePickerStartDate />
    <h2 id="today-button">Today Button</h2>
    <DatePickerTodayButton />
    <h2 id="date-range">Date Range</h2>
    <DatePickerRange />
  </div>
);

export default DatePickerExamples;
