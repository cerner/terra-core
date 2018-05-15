/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-table/docs/README.md';
import { name } from 'terra-list/package.json';

// Component Source
import TableSrc from '!raw-loader!terra-table/src/Table';
import SingleSelectableRowsSrc from '!raw-loader!terra-table/src/SingleSelectableRows';
import TableHeaderSrc from '!raw-loader!terra-table/src/TableHeader';
import TableHeaderCellSrc from '!raw-loader!terra-table/src/TableHeaderCell';
import TableRowSrc from '!raw-loader!terra-table/src/TableRow';
import TableRowsSrc from '!raw-loader!terra-table/src/TableRows';
import SelectableTableRowsSrc from '!raw-loader!terra-table/src/SelectableTableRows';
import TableCellSrc from '!raw-loader!terra-table/src/TableCell';
import TableSubheaderSrc from '!raw-loader!terra-table/src/TableSubheader';

import NoStripedTable from './examples/NoStripedTable';
import NoStripedTableSrc from '!raw-loader!./examples/NoStripedTable';
import NoPaddingTable from './examples/NoPaddingTable';
import NoPaddingTableSrc from '!raw-loader!./examples/NoPaddingTable';
import StripedTable from './examples/StripedTable';
import StripedTableSrc from '!raw-loader!./examples/StripedTable';
import TableWithMultipleOnClicks from './examples/TableWithMultipleOnClicks';
import TableWithMultipleOnClicksSrc from '!raw-loader!./examples/TableWithMultipleOnClicks';
import TableWithHighlightedRows from './examples/TableWithHighlightedRows';
import TableWithHighlightedRowsSrc from '!raw-loader!./examples/TableWithHighlightedRows';
import SingleRowSelectableTable from './examples/SingleRowSelectableTable';
import SingleRowSelectableTableSrc from '!raw-loader!./examples/SingleRowSelectableTable';
import TableWithNonSelectableRow from './examples/TableWithNonSelectableRow';
import TableWithNonSelectableRowSrc from '!raw-loader!./examples/TableWithNonSelectableRow';
import TableWithSortingIndicator from './examples/TableWithSortingIndicator';
import TableWithSortingIndicatorSrc from '!raw-loader!./examples/TableWithSortingIndicator';
import TableWithLongContent from './examples/TableWithLongContent';
import TableWithLongContentSrc from '!raw-loader!./examples/TableWithLongContent';
import TableWithCustomCells from './examples/TableWithCustomCells';
import TableWithCustomCellsSrc from '!raw-loader!./examples/TableWithCustomCells';
import TableWithSubheaders from './examples/TableWithSubheaders';
import TableWithSubheadersSrc from '!raw-loader!./examples/TableWithSubheaders';

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
        title: 'Table with multiple header onClick handlers (Click &ldquo;Name&rdquo; header to preview)',
        example: <TableWithMultipleOnClicks />,
        source: TableWithMultipleOnClicksSrc,
      },
      {
        title: 'Table with some rows selected. Table will not select or deselect any row',
        example: <TableWithHighlightedRows />,
        source: TableWithHighlightedRowsSrc,
      },
      {
        title: 'Single Selectable table',
        example: <SingleRowSelectableTable />,
        source: SingleRowSelectableTableSrc,
      },
      {
        title: 'Single Selectable table with second row as non selectable',
        example: <TableWithNonSelectableRow />,
        source: TableWithNonSelectableRowSrc,
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
        componentName: 'Table Rows',
        componentSrc: TableRowsSrc,
      },
      {
        componentName: 'Selectable Table Rows',
        componentSrc: SelectableTableRowsSrc,
      },
      {
        componentName: 'Single Selectable Rows',
        componentSrc: SingleSelectableRowsSrc,
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
