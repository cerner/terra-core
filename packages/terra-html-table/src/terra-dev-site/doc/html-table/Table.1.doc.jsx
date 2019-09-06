import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

import TablePropsTable from '!terra-props-table-loader!../../../../src/Table';
import TableSrc from '!raw-loader!../../../../src/Table';
import TableHeaderPropsTable from '!terra-props-table-loader!../../../../src/TableHeader';
import TableHeaderSrc from '!raw-loader!../../../../src/TableHeader';
import TableHeaderCellPropsTable from '!terra-props-table-loader!../../../../src/TableHeaderCell';
import TableHeaderCellSrc from '!raw-loader!../../../../src/TableHeaderCell';
import TableRowPropsTable from '!terra-props-table-loader!../../../../src/TableRow';
import TableRowSrc from '!raw-loader!../../../../src/TableRow';
import TableCellPropsTable from '!terra-props-table-loader!../../../../src/TableCell';
import TableCellSrc from '!raw-loader!../../../../src/TableCell';
import NoStripedTable from '../example/NoStripedTable';
import NoStripedTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/NoStripedTable';
import CompactPaddingTable from '../example/CompactPaddingTable';
import CompactPaddingTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CompactPaddingTable';
import StandardPaddingTable from '../example/StandardPaddingTable';
import StandardPaddingTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/StandardPaddingTable';
import StripedTable from '../example/StripedTable';
import StripedTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/StripedTable';
import TableWithLongContent from '../example/TableWithLongContent';
import TableWithLongContentSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TableWithLongContent';
import TableWithCustomCells from '../example/TableWithCustomCells';
import TableWithCustomCellsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TableWithCustomCells';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Table without zebra stripes',
        example: <NoStripedTable />,
        source: NoStripedTableSrc,
      },
      {
        title: 'Table with zebra stripes',
        example: <StripedTable />,
        source: StripedTableSrc,
      },
      {
        title: 'Table with compact padding',
        example: <CompactPaddingTable />,
        source: CompactPaddingTableSrc,
      },
      {
        title: 'Table with standard padding',
        example: <StandardPaddingTable />,
        source: StandardPaddingTableSrc,
      },
      {
        title: 'Table with long content',
        example: <TableWithLongContent />,
        source: TableWithLongContentSrc,
      },
      {
        title: 'Table with custom cells',
        example: <TableWithCustomCells />,
        source: TableWithCustomCellsSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Table',
        componentSrc: TableSrc,
        componentProps: TablePropsTable,
      },
      {
        componentName: 'Table Header',
        componentSrc: TableHeaderSrc,
        componentProps: TableHeaderPropsTable,
      },
      {
        componentName: 'Table Header Cell',
        componentSrc: TableHeaderCellSrc,
        componentProps: TableHeaderCellPropsTable,
      },
      {
        componentName: 'Table Row',
        componentSrc: TableRowSrc,
        componentProps: TableRowPropsTable,
      },
      {
        componentName: 'Table Cell',
        componentSrc: TableCellSrc,
        componentProps: TableCellPropsTable,
      },
    ]}
  />
);

export default DocPage;
