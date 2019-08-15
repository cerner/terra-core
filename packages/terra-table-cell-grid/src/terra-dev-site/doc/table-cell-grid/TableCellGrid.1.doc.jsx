import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/TableCellGrid.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import TableCellGridSrc from '!raw-loader!../../../../src/TableCellGrid';

import TableCellGridExample from '../example/TableCellGridExample';
import TableCellGridExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TableCellGridExample';
import FixedHeightTable from '../example/FixedHeightTable';
import FixedHeightTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/FixedHeightTable';
import HeaderFooterExample from '../example/HeaderFooterExample';
import HeaderFooterExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/HeaderFooterExample';
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
        title: 'Default TableCellGrid',
        example: <TableCellGridExample />,
        source: TableCellGridExampleSrc,
      },
      {
        title: 'TableCellGrid with standard padding',
        example: <PaddingTable paddingStyle="standard" />,
        source: PaddingTableSrc,
      },
      {
        title: 'TableCellGrid with compact padding',
        example: <PaddingTable paddingStyle="compact" />,
        source: PaddingTableSrc,
      },
      {
        title: 'TableCellGrid with zebra stripes',
        example: <StripedTable />,
        source: StripedTableSrc,
      },
      {
        title: 'TableCellGrid with Header/Footer',
        example: <HeaderFooterExample />,
        source: HeaderFooterExampleSrc,
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
