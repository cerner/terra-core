/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';
import { name } from '../../../package.json';

// Component Source
import DateTimePickerSrc from '!raw-loader!../../../src/DateTimePicker';

// Example Files
import DateTimePickerDefault from './example/DateTimePickerDefault';
import DateTimePickerDefaultDateTime from './example/DateTimePickerDefaultDateTime';
import DateTimePickerDefaultDateOnly from './example/DateTimePickerDefaultDateOnly';
import DateTimePickerExcludeDates from './example/DateTimePickerExcludeDates';
import DateTimePickerIncludeDates from './example/DateTimePickerIncludeDates';
import DateTimePickerFilterDates from './example/DateTimePickerFilterDates';
import DateTimePickerMinMax from './example/DateTimePickerMinMax';
import DateTimePickerDST from './example/DateTimePickerDST';
import DateTimePickerInsideModal from './example/DateTimePickerInsideModal';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default',
        example: <DateTimePickerDefault />,
      },
      {
        title: 'Default Date Time',
        example: <DateTimePickerDefaultDateTime />,
      },
      {
        title: 'Default Date Only',
        example: <DateTimePickerDefaultDateOnly />,
      },
      {
        title: 'Exclude Dates',
        example: <DateTimePickerExcludeDates />,
      },
      {
        title: 'Include Dates',
        example: <DateTimePickerIncludeDates />,
      },
      {
        title: 'Filter Dates',
        example: <DateTimePickerFilterDates />,
      },
      {
        title: 'Min Max Selection Options',
        example: <DateTimePickerMinMax />,
      },
      {
        title: 'Daylight Saving',
        description: (
          <div>
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
          </div>
        ),
        example: <DateTimePickerDST />,
      },
      {
        title: 'Presented Inside Modal',
        example: <DateTimePickerInsideModal />,
      },
    ]}
    propsTables={[
      {
        componentName: 'Date Time Picker',
        componentSrc: DateTimePickerSrc,
      },
    ]}
  />
);

export default DocPage;
