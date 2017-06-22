/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import moment from 'moment';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-time-input/docs/README.md';
import { version } from 'terra-time-input/package.json';
import TimeInput from 'terra-time-input/src/TimeInput';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TimeInputSrc from '!raw-loader!terra-time-input/src/TimeInput';

const handleOnChange = (event, time) => {
  window.console.log('**handleOnChange** Input value:', event.target.value, ' Updated time:', time);
};

const TimeInputExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TimeInputSrc} />
    <h2 id="default">Without Default Time</h2>
    <TimeInput
      name="time-input-default"
    />
    <br />
    <br />
    <h2 id="default">With Default Time</h2>
    <TimeInput
      name="time-input-value"
      value={moment().format('HH:mm')}
      onChange={handleOnChange}
    />
  </div>
);

export default TimeInputExamples;
