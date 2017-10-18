/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-horizontal-divider/docs/README.md';
import { version } from 'terra-horizontal-divider/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import HorizontalDividerSrc from '!raw-loader!terra-horizontal-divider/src/HorizontalDivider';

// Example Files

const HorizontalDividerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={HorizontalDividerSrc} />
  </div>
);

export default HorizontalDividerExamples;
