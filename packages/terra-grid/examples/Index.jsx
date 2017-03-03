/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from '../../../packages/terra-site/src/PropsTable';
import Markdown from '../../../packages/terra-site/src/Markdown';
import ReadMe from '../docs/README.md';
// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import GridSrc from '!raw-loader!../src/Grid.jsx';
import GridRowSrc from '!raw-loader!../src/GridRow.jsx';
import GridColumnSrc from '!raw-loader!../src/GridColumn.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
// Example Files
import GridDefault from './GridDefault';
import GridResponsive from './GridResponsive';
import GridNested from './GridNested';

const GridExamples = () => (
  <div>
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
