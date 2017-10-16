import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-date-picker/docs/README.md';
import { version } from 'terra-date-picker/package.json';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import DatePickerSrc from '!raw-loader!terra-date-picker/src/DatePicker';
// Example Files
import DatePickerDefault from './DatePickerDefault';
import DatePickerExcludeDates from './DatePickerExcludeDates';
import DatePickerIncludeDates from './DatePickerIncludeDates';
import DatePickerFilterDates from './DatePickerFilterDates';
import DatePickerMinMax from './DatePickerMinMax';
import DatePickerDefaultDate from './DatePickerDefaultDate';
import DatePickerInsideModal from './DatePickerInsideModal';

const DatePickerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={DatePickerSrc} />
    <h2 id="default">Default</h2>
    <DatePickerDefault />
    <h2 id="exclude-dates">Exclude Dates</h2>
    <DatePickerExcludeDates />
    <h2 id="filter-dates">Filter Dates</h2>
    <DatePickerFilterDates />
    <h2 id="include-dates">Include Dates</h2>
    <DatePickerIncludeDates />
    <h2 id="min-max">Min Max Selection Options</h2>
    <DatePickerMinMax />
    <h2 id="start-date">Default Date</h2>
    <DatePickerDefaultDate />
    <h2 id="modal">Presented Inside Modal</h2>
    <DatePickerInsideModal />
  </div>
);

export default DatePickerExamples;
