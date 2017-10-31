/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-flex-box/docs/README.md';
import { version } from 'terra-flex-box/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import FlexBoxSrc from '!raw-loader!terra-flex-box/src/FlexBox';

// Example File
import FlexBoxAlignment from './FlexBoxAlignment';

const FlexBoxExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={FlexBoxSrc} />
    <h2>Example</h2>
    <FlexBoxAlignment />
  </div>
);

export default FlexBoxExamples;
