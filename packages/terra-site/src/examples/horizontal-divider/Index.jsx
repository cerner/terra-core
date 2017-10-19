/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-horizontal-divider/docs/README.md';
import { version } from 'terra-horizontal-divider/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions

// Example Files
// Example Files
import HorizontalDivider from './HorizontalDividerExample';

const HorizontalDividerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <HorizontalDivider />
  </div>
);

export default HorizontalDividerExamples;
