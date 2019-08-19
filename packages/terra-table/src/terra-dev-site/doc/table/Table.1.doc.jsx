import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Component Source
import TableSrc from '!raw-loader!../../../../src/Table';
import TableHeaderSrc from '!raw-loader!../../../../src/TableHeader';
import TableHeaderCellSrc from '!raw-loader!../../../../src/TableHeaderCell';
import TableRowSrc from '!raw-loader!../../../../src/TableRow';
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
      },
      {
        componentName: 'Table Header',
        componentSrc: TableHeaderSrc,
      },
      {
        componentName: 'Table Header Cell',
        componentSrc: TableHeaderCellSrc,
      },
      {
        componentName: 'Table Row',
        componentSrc: TableRowSrc,
      },
      {
        componentName: 'Table Cell',
        componentSrc: TableCellSrc,
      },
    ]}
  />
);

export default DocPage;
