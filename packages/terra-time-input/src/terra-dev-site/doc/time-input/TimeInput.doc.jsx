import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import TimeInputSrc from '!raw-loader!../../../../src/TimeInput';

// Example Files
import TimeInputDefaultTime from '../example/TimeInputDefaultTime';
import TimeInputDefaultTimeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TimeInputDefaultTime';
import TimeInputDefaultTwelveHour from '../example/TimeInputDefaultTwelveHour';
import TimeInputDefaultTwelveHourSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TimeInputDefaultTwelveHour';
import TimeInputNoDefaultTime from '../example/TimeInputNoDefaultTime';
import TimeInputNoDefaultTimeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TimeInputNoDefaultTime';
import TimeInputNoDefaultTwelveHour from '../example/TimeInputNoDefaultTwelveHour';
import TimeInputNoDefaultTwelveHourSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TimeInputNoDefaultTwelveHour';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
