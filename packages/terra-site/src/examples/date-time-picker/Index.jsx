import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-date-time-picker/docs/README.md';
import { version } from 'terra-date-time-picker/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import DateTimePickerSrc from '!raw-loader!terra-date-time-picker/src/DateTimePicker';
// Example Files
import DateTimePickerDefault from './DateTimePickerDefault';
import DateTimePickerDefaultDateTime from './DateTimePickerDefaultDateTime';
import DateTimePickerDefaultDateOnly from './DateTimePickerDefaultDateOnly';
import DateTimePickerExcludeDates from './DateTimePickerExcludeDates';
import DateTimePickerIncludeDates from './DateTimePickerIncludeDates';
import DateTimePickerFilterDates from './DateTimePickerFilterDates';
import DateTimePickerMinMax from './DateTimePickerMinMax';
import DateTimePickerDST from './DateTimePickerDST';
import DateTimePickerInsideModal from './DateTimePickerInsideModal';

const DateTimePickerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={DateTimePickerSrc} />
    <h2 id="default">Default</h2>
    <DateTimePickerDefault />
    <h2 id="default-date-time">Default Date Time</h2>
    <DateTimePickerDefaultDateTime />
    <h2 id="default-date-only">Default Date Only</h2>
    <DateTimePickerDefaultDateOnly />
    <h2 id="exclude-dates">Exclude Dates</h2>
    <DateTimePickerExcludeDates />
    <h2 id="filter-dates">Filter Dates</h2>
    <DateTimePickerFilterDates />
    <h2 id="include-dates">Include Dates</h2>
    <DateTimePickerIncludeDates />
    <h2 id="min-max">Min Max Selection Options</h2>
    <DateTimePickerMinMax />
    <h2 id="dst">Daylight Saving</h2>
    <p>
      In the United States, the missing hour occurs when DST begins at these recent past and near future dates between 2:00 and 3:00.
      <br />   - March 13th, 2016
      <br />   - March 12th, 2017
      <br />   - March 11th, 2018
      <br />   - March 10th, 2019
      <br />   - March 08th, 2020
    </p>
    <p>
      In the United States, the ambiguous hour occurs when DST ends at these recent past and near future dates between 1:00 and 2:00:
      <br />   - November 6th, 2016
      <br />   - November 5th, 2017
      <br />   - November 4th, 2018
      <br />   - November 3rd, 2019
      <br />   - November 1st, 2020
    </p>
    <p>
      For the United States, click <a href="https://en.wikipedia.org/wiki/Daylight_saving_time_in_the_United_States">here</a> to see more recent past and near future starting and ending dates of daylight saving time.
      <br />
      For other time zones, click <a href="http://www.timezoneconverter.com/cgi-bin/zoneinfo">here</a> to see the starting and ending dates of daylight saving time for the current year.
    </p>
    <DateTimePickerDST />
    <h2 id="modal">Presented Inside Modal</h2>
    <DateTimePickerInsideModal />
  </div>
);

export default DateTimePickerExamples;
