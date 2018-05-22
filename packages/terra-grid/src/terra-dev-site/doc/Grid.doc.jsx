/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-grid/docs/README.md';
import { name } from 'terra-grid/package.json';

// Component Source
import GridSrc from '!raw-loader!terra-grid/src/Grid';
import GridRowSrc from '!raw-loader!terra-grid/src/GridRow';
import GridColumnSrc from '!raw-loader!terra-grid/src/GridColumn';

// Example Files
import GridDefault from './example/GridDefault';
import GridDefaultSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/GridDefault';
import GridResponsive from './example/GridResponsive';
import GridResponsiveSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/GridResponsive';
import GridNested from './example/GridNested';
import GridNestedSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/GridNested';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Grid',
        example: <GridDefault />,
        source: GridDefaultSrc,
      },
      {
        title: 'Responsive Grid',
        example: <GridResponsive />,
        source: GridResponsiveSrc,
      },
      {
        title: 'Nested Grid',
        example: <GridNested />,
        source: GridNestedSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Grid',
        componentSrc: GridSrc,
      },
      {
        componentName: 'Grid Row',
        componentSrc: GridRowSrc,
      },
      {
        componentName: 'Grid Column',
        componentSrc: GridColumnSrc,
      },
    ]}
  />
);

export default DocPage;
