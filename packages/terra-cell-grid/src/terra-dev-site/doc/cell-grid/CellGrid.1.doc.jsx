import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Example Files
import CellPropsTable from '!terra-props-table-loader!../../../../src/Cell';
import CellGridPropsTable from '!terra-props-table-loader!../../../../src/CellGrid';

import CellSrc from '!raw-loader!../../../../src/Cell';
import CellGridSrc from '!raw-loader!../../../../src/CellGrid';

import CellGridExample from '../example/CellGridExample';
import CellGridExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CellGridExample';
import CellGridVertical from '../example/CellGridVertical';
import CellGridVerticalSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CellGridVertical';
import CellGridHorizontal from '../example/CellGridHorizontal';
import CellGridHorizontalSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CellGridHorizontal';
import CellGridBoth from '../example/CellGridBoth';
import CellGridBothSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CellGridBoth';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default',
        example: <CellGridExample />,
        source: CellGridExampleSrc,
      },
      {
        title: 'Divided Vertically',
        example: <CellGridVertical />,
        source: CellGridVerticalSrc,
      },
      {
        title: 'Divided Horizontally',
        example: <CellGridHorizontal />,
        source: CellGridHorizontalSrc,
      },
      {
        title: 'Divided Both Directions',
        example: <CellGridBoth />,
        source: CellGridBothSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Cell',
        componentSrc: CellSrc,
        componentProps: CellPropsTable,
      },
      {
        componentName: 'CellGrid',
        componentSrc: CellGridSrc,
        componentProps: CellGridPropsTable,
      },
    ]}
  />
);

export default DocPage;
