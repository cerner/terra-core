import React from 'react';
import moment from 'moment';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import DatePicker from 'terra-date-picker';
import DateRange from 'terra-date-picker/lib/DateRange';
import ReadMe from 'terra-date-picker/docs/README.md';
import { version } from 'terra-date-picker/package.json';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import DatePickerSrc from '!raw-loader!terra-date-picker/src/DatePicker';
// Example Files
import DatePickerFilterDates from './DatePickerFilterDates';
import DatePickerOnChange from './DatePickerOnChange';

const DatePickerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={DatePickerSrc} />
    <h2 id="default">Default</h2>
    <DatePicker
      name="date-input-default"
    />
    <h2 id="exclude-dates">ExcludeDates</h2>
    <DatePicker
      name="date-input-exclude"
      excludeDates={[moment().subtract(1, 'days').format(), moment().add(1, 'days').format()]}
    />
    <h2 id="filter-dates">FilterDates</h2>
    <DatePickerFilterDates />
    <h2 id="include-dates">Include Dates</h2>
    <DatePicker
      name="date-input-include"
      includeDates={[moment().format(), moment().subtract(1, 'days').format(), moment().add(1, 'days').format()]}
    />
    <h2 id="min-max">Min Max</h2>
    <DatePicker
      name="date-input-min-max"
      minDate={moment().format()}
      maxDate={moment().add(6, 'days').format()}
    />
    <h2 id="on-change">On Change</h2>
    <DatePickerOnChange />
    <h2 id="start-date">Default Date</h2>
    <DatePicker
      name="date-input-default-date"
      selectedDate={moment().format()}
    />
    <h2 id="date-range">Date Range</h2>
    <DateRange
      startName="date-input-start"
      endName="date-input-end"
      startDate={moment().add(1, 'days').format()}
      endDate={moment().add(7, 'days').format()}
    />
  </div>
);

export default DatePickerExamples;
