/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-time-input/docs/README.md';
import { version } from 'terra-time-input/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TimeInputSrc from '!raw-loader!terra-time-input/src/TimeInput';

// Example Files
import TimeInputDefaultTime from './TimeInputDefaultTime';
import TimeInputDefaultTwelveHour from './TimeInputDefaultTwelveHour';
import TimeInputNoDefaultTime from './TimeInputNoDefaultTime';
import TimeInputNoDefaultTwelveHour from './TimeInputNoDefaultTwelveHour';

const TimeInputExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TimeInputSrc} />
    <h2 id="default">Without Default Time</h2>
    <TimeInputNoDefaultTime />
    <h2 id="default">With Default Time</h2>
    <TimeInputDefaultTime />
    <h2 id="default">Without Default Time - 12 Hour</h2>
    <TimeInputNoDefaultTwelveHour />
    <h2 id="default">With Default Time - 12 Hour</h2>
    <TimeInputDefaultTwelveHour />
  </div>
);

export default TimeInputExamples;
