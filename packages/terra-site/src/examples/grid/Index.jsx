import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-grid/docs/README.md';
import { version } from 'terra-grid/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved, import/extensions */
import GridSrc from '!raw-loader!terra-grid/src/Grid';
import GridRowSrc from '!raw-loader!terra-grid/src/GridRow';
import GridColumnSrc from '!raw-loader!terra-grid/src/GridColumn';
/* eslint-enable import/no-webpack-loader-syntax, import/no-unresolved, import/extensions */

// Example Files
import GridDefault from './GridDefault';
import GridResponsive from './GridResponsive';
import GridNested from './GridNested';

const GridExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={GridSrc} componentName="Grid" />
    <PropsTable id="props" src={GridRowSrc} componentName="Grid Row" />
    <PropsTable id="props" src={GridColumnSrc} componentName="Grid Column" />
    <h2 id="default">Default Grid</h2>
    <GridDefault />
    <br />
    <h2 id="responsive">Responsive Grid</h2>
    <GridResponsive />
    <br />
    <h2 id="nested">Nested Grid</h2>
    <GridNested />
  </div>
);

export default GridExamples;
