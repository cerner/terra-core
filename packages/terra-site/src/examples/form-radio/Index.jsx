/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-radio/docs/README.md';
import { version } from 'terra-form-radio/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import RadioSrc from '!raw-loader!terra-form-radio/src/Radio';

// Example Files

const RadioExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={RadioSrc} />
  </div>
);

export default RadioExamples;
