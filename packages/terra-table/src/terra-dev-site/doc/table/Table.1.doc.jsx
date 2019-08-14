import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import TableSrc from '!raw-loader!../../../../src/Table';
import TableHeaderSrc from '!raw-loader!../../../../src/TableHeader';
import TableHeaderCellSrc from '!raw-loader!../../../../src/TableHeaderCell';
import TableRowSrc from '!raw-loader!../../../../src/TableRow';
import TableCellSrc from '!raw-loader!../../../../src/TableCell';
import TableSubheaderSrc from '!raw-loader!../../../../src/TableSubheader';
import NoStripedTable from '../example/NoStripedTable';
import NoStripedTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/NoStripedTable';
import NoPaddingTable from '../example/NoPaddingTable';
import NoPaddingTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/NoPaddingTable';
import StripedTable from '../example/StripedTable';
import StripedTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/StripedTable';
import TableWithMultipleOnClicks from '../example/TableWithMultipleOnClicks';
import TableWithMultipleOnClicksSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TableWithMultipleOnClicks';
import TableWithHighlightedRows from '../example/TableWithHighlightedRows';
import TableWithHighlightedRowsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TableWithHighlightedRows';
import TableWithSortingIndicator from '../example/TableWithSortingIndicator';
import TableWithSortingIndicatorSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TableWithSortingIndicator';
import TableWithLongContent from '../example/TableWithLongContent';
import TableWithLongContentSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TableWithLongContent';
import TableWithCustomCells from '../example/TableWithCustomCells';
import TableWithCustomCellsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TableWithCustomCells';
import TableWithSubheaders from '../example/TableWithSubheaders';
import TableWithSubheadersSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TableWithSubheaders';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
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
        title: 'Table without padding',
        example: <NoPaddingTable />,
        source: NoPaddingTableSrc,
      },
      {
        title: 'Table with multiple header onClick handlers (Click \u2018Name\u2019 header to preview)',
        example: <TableWithMultipleOnClicks />,
        source: TableWithMultipleOnClicksSrc,
      },
      {
        title: 'Table with some rows selected. Table will not select or deselect any row',
        example: <TableWithHighlightedRows />,
        source: TableWithHighlightedRowsSrc,
      },
      {
        title: 'Table with sorting indicator',
        example: <TableWithSortingIndicator />,
        source: TableWithSortingIndicatorSrc,
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
      {
        title: 'Table with subheaders',
        example: <TableWithSubheaders />,
        source: TableWithSubheadersSrc,
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
        componentName: 'Table Subheader',
        componentSrc: TableSubheaderSrc,
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
