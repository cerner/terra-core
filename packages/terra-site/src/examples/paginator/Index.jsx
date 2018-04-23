/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-paginator/docs/README.md';
import { version } from 'terra-paginator/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import PaginatorSrc from '!raw-loader!terra-paginator/src/Paginator';

// Example Files
import SearchPaginatorExample from './SearchPaginatorExample';
import SearchPaginatorNoPagesExample from './SearchPaginatorNoPagesExample';
import ProgressivePaginatorExample from './ProgressivePaginatorExample';

const PaginatorExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={PaginatorSrc} />
    <h2>Paginator Example</h2>
    <SearchPaginatorExample />
    <h2>Paginator Example Without Pages</h2>
    <SearchPaginatorNoPagesExample />
    <h2>Progressive Paginator Example</h2>
    <ProgressivePaginatorExample />
  </div>
);

export default PaginatorExamples;
