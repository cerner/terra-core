/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-paginator/docs/ProgressiveREADME.md';
import { version } from 'terra-paginator/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import PaginatorSrc from '!raw-loader!terra-paginator/src/ProgressivePaginator';

// Example Files
import ProgressivePaginatorExample from './ProgressivePaginatorExample';

const ProgressivePaginatorExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={PaginatorSrc} />
    <h2>Progressive Paginator Example</h2>
    <ProgressivePaginatorExample />
  </div>
);

export default ProgressivePaginatorExamples;
