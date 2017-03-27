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
    <h2>Grid</h2>
    <PropsTable id="props" src={GridSrc} />
    <h2>Grid Row</h2>
    <PropsTable id="props" src={GridRowSrc} />
    <h2>Grid Column</h2>
    <PropsTable id="props" src={GridColumnSrc} />
    <h2 id="default">Default Grid</h2>
    <GridDefault />
    <h2 id="responsive">Responsive Grid</h2>
    <GridResponsive />
    <h2 id="nested">Nested Grid</h2>
    <GridNested />
  </div>
);

export default GridExamples;
