import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/TableCellGrid.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import TableCellGridSrc from '!raw-loader!../../../../src/TableCellGrid';

import TableCellGridExample from '../example/TableCellGridExample';
import TableCellGridExampleSrc from '../example/TableCellGridExample';
import FixedHeightTable from '../example/FixedHeightTable';
import FixedHeightTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/FixedHeightTable';
import StripedTable from '../example/StripedTable';
import StripedTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/StripedTable';
import PaddingTable from '../example/PaddingTable';
import PaddingTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PaddingTable';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Table',
        example: <TableCellGridExample />,
        source: TableCellGridExampleSrc,
      },
      {
        title: 'Table with standard padding',
        example: <PaddingTable paddingStyle="standard" />,
        source: PaddingTableSrc,
      },
      {
        title: 'Table with compact padding',
        example: <PaddingTable paddingStyle="compact" />,
        source: PaddingTableSrc,
      },
      {
        title: 'Table zebra stripes',
        example: <StripedTable />,
        source: StripedTableSrc,
      },
      {
        title: 'Fill Style Table',
        example: <FixedHeightTable />,
        source: FixedHeightTableSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'TableCellGrid',
        componentSrc: TableCellGridSrc,
      },
    ]}
  />
);

export default DocPage;
