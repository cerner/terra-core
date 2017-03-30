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
    <DatePicker />
    <h2 id="exclude-dates">ExcludeDates</h2>
    <DatePicker
      excludeDates={[moment().subtract(1, 'days'), moment().add(1, 'days')]}
    />
    <h2 id="filter-dates">FilterDates</h2>
    <DatePickerFilterDates />
    <h2 id="include-dates">Include Dates</h2>
    <DatePicker
      includeDates={[moment(), moment().subtract(1, 'days'), moment().add(1, 'days')]}
    />
    <h2 id="min-max">Min Max</h2>
    <DatePicker
      minDate={moment()}
      maxDate={moment().add(6, 'days')}
    />
    <h2 id="on-change">On Change</h2>
    <DatePickerOnChange />
    <h2 id="start-date">Start Date</h2>
    <DatePicker
      startDate={moment()}
    />
    <h2 id="date-range">Date Range</h2>
    <DateRange
      startDate={moment().add(1, 'days')}
      endDate={moment().add(7, 'days')}
    />
  </div>
);

export default DatePickerExamples;
