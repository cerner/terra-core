/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-time-input/docs/README.md';
import { name } from 'terra-time-input/package.json';

// Component Source
import TimeInputSrc from '!raw-loader!terra-time-input/src/TimeInput';

// Example Files
import TimeInputDefaultTime from './TimeInputDefaultTime';
import TimeInputDefaultTimeSrc from '!raw-loader!./TimeInputDefaultTime';
import TimeInputDefaultTwelveHour from './TimeInputDefaultTwelveHour';
import TimeInputDefaultTwelveHourSrc from '!raw-loader!./TimeInputDefaultTwelveHour';
import TimeInputNoDefaultTime from './TimeInputNoDefaultTime';
import TimeInputNoDefaultTimeSrc from '!raw-loader!./TimeInputNoDefaultTime';
import TimeInputNoDefaultTwelveHour from './TimeInputNoDefaultTwelveHour';
import TimeInputNoDefaultTwelveHourSrc from '!raw-loader!./TimeInputNoDefaultTwelveHour';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Without Default Time',
        example: <TimeInputNoDefaultTime />,
        source: TimeInputNoDefaultTimeSrc,
      },
      {
        title: 'With Default Time',
        example: <TimeInputDefaultTime />,
        source: TimeInputDefaultTimeSrc,
      },
      {
        title: 'Without Default Time - 12 Hour',
        example: <TimeInputNoDefaultTwelveHour />,
        source: TimeInputNoDefaultTwelveHourSrc,
      },
      {
        title: 'With Default Time - 12 Hour',
        example: <TimeInputDefaultTwelveHour />,
        source: TimeInputDefaultTwelveHourSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Time Input',
        componentSrc: TimeInputSrc,
      },
    ]}
  />
);

export default DocPage;
