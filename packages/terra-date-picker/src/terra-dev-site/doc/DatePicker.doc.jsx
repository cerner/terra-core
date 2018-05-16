/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-date-picker/docs/README.md';
import { name } from 'terra-date-picker/package.json';

// Component Source
import DatePickerSrc from '!raw-loader!terra-date-picker/src/DatePicker';

// Example Files
import DatePickerDefault from './example/DatePickerDefault';
import DatePickerExcludeDates from './example/DatePickerExcludeDates';
import DatePickerIncludeDates from './example/DatePickerIncludeDates';
import DatePickerFilterDates from './example/DatePickerFilterDates';
import DatePickerMinMax from './example/DatePickerMinMax';
import DatePickerDefaultDate from './example/DatePickerDefaultDate';
import DatePickerInsideModal from './example/DatePickerInsideModal';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default',
        example: <DatePickerDefault />,
      },
      {
        title: 'Exclude Dates',
        example: <DatePickerExcludeDates />,
      },
      {
        title: 'Filter Dates',
        example: <DatePickerFilterDates />,
      },
      {
        title: 'Include Dates',
        example: <DatePickerIncludeDates />,
      },
      {
        title: 'Min Max Selection Options',
        example: <DatePickerMinMax />,
      },
      {
        title: 'Default Date',
        example: <DatePickerDefaultDate />,
      },
      {
        title: 'Presented Inside Modal',
        example: <DatePickerInsideModal />,
      },
    ]}
    propsTables={[
      {
        componentName: 'Date Picker',
        componentSrc: DatePickerSrc,
      },
    ]}
  />
);

export default DocPage;
