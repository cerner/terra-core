/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-flex-container/docs/README.md';
import { version } from 'terra-flex-container/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions

// Example File
import FlexContainerExample from './FlexContainerExample';

const FlexContainerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Example</h2>
    <FlexContainerExample />
  </div>
);

export default FlexContainerExamples;
