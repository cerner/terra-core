/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-collapse/docs/README.md';
import { version } from 'terra-collapse/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import CollapseSrc from '!raw-loader!terra-collapse/src/Collapse';

// Example Files
import DefaultCollapse from './DefaultCollapse';

const CollapseExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={CollapseSrc} />
    <DefaultCollapse />
  </div>
);

export default CollapseExamples;
