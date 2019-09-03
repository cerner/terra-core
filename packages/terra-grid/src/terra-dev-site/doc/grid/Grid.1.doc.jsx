import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Example Files
import GridPropsTable from '!terra-props-table-loader!../../../../src/Grid';
import GridSrc from '!raw-loader!../../../../src/Grid';
import GridColumnPropsTable from '!terra-props-table-loader!../../../../src/GridColumn';
import GridColumnSrc from '!raw-loader!../../../../src/GridColumn';
import GridRowPropsTable from '!terra-props-table-loader!../../../../src/GridRow';
import GridRowSrc from '!raw-loader!../../../../src/GridRow';
import GridDefault from '../example/GridDefault';
import GridDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/GridDefault';
import GridResponsive from '../example/GridResponsive';
import GridResponsiveSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/GridResponsive';
import GridNested from '../example/GridNested';
import GridNestedSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/GridNested';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
        componentProps: GridPropsTable,
      },
      {
        componentName: 'Grid Column',
        componentSrc: GridColumnSrc,
        componentProps: GridColumnPropsTable,
      },
      {
        componentName: 'Grid Row',
        componentSrc: GridRowSrc,
        componentProps: GridRowPropsTable,
      },
    ]}
  />
);

export default DocPage;
