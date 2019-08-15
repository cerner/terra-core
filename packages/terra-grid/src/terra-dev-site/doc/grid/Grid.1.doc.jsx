import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import GridPropsTable from '../../../../docs/Grid-props-table.md';
import GridColumnPropsTable from '../../../../docs/GridColumn-props-table.md';
import GridRowPropsTable from '../../../../docs/GridRow-props-table.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import GridDefault from '../example/GridDefault';
import GridDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/GridDefault';
import GridResponsive from '../example/GridResponsive';
import GridResponsiveSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/GridResponsive';
import GridNested from '../example/GridNested';
import GridNestedSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/GridNested';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
    propsTablesMarkdown={[GridPropsTable, GridColumnPropsTable, GridRowPropsTable]}
  />
);

export default DocPage;
