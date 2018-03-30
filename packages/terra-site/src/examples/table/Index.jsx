/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-table/docs/README.md';
import { version } from 'terra-list/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import TableSrc from '!raw-loader!terra-table/src/Table';
import SingleSelectableRowsSrc from '!raw-loader!terra-table/src/SingleSelectableRows';
import TableHeaderSrc from '!raw-loader!terra-table/src/TableHeader';
import TableHeaderCellSrc from '!raw-loader!terra-table/src/TableHeaderCell';
import TableRowSrc from '!raw-loader!terra-table/src/TableRow';
import TableRowsSrc from '!raw-loader!terra-table/src/TableRows';
import SelectableTableRowsSrc from '!raw-loader!terra-table/src/SelectableTableRows';
import TableCellSrc from '!raw-loader!terra-table/src/TableCell';
import TableSubheaderSrc from '!raw-loader!terra-table/src/TableSubheader';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

import NoStripedTable from './examples/NoStripedTable';
import NoPaddingTable from './examples/NoPaddingTable';
import StripedTable from './examples/StripedTable';
import TableWithMultipleOnClicks from './examples/TableWithMultipleOnClicks';
import TableWithHighlightedRows from './examples/TableWithHighlightedRows';
import SingleRowSelectableTable from './examples/SingleRowSelectableTable';
import TableWithNonSelectableRow from './examples/TableWithNonSelectableRow';
import TableWithSortingIndicator from './examples/TableWithSortingIndicator';
import TableWithLongContent from './examples/TableWithLongContent';
import TableWithCustomCells from './examples/TableWithCustomCells';
import TableWithSubheaders from './examples/TableWithSubheaders';

const TableExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-table" src={TableSrc} componentName="Table" />
    <PropsTable id="props-tableHeader" src={TableHeaderSrc} componentName="Table Header" />
    <PropsTable id="props-tableHeaderCell" src={TableHeaderCellSrc} componentName="Table Header Cell" />
    <PropsTable id="props-tableSubheader" src={TableSubheaderSrc} componentName="Table Subheader" />
    <PropsTable id="props-tableRows" src={TableRowsSrc} componentName="Table Rows" />
    <PropsTable id="props-selectabletableRows" src={SelectableTableRowsSrc} componentName="Selectable Table Rows" />
    <PropsTable id="props-singleSelectableRows" src={SingleSelectableRowsSrc} componentName="Single Selectable Rows" />
    <PropsTable id="props-tableRow" src={TableRowSrc} componentName="Table Row" />
    <PropsTable id="props-tablecell" src={TableCellSrc} componentName="Table Cell" />
    <br />
    <h1>Examples </h1>
    <h2>Table without zebra stripes</h2>
    <NoStripedTable />
    <br />
    <h2>Table with zebra stripes</h2>
    <StripedTable />
    <br />
    <h2>Table without padding</h2>
    <NoPaddingTable />
    <br />
    <h2>Table with multiple header onClick handlers (Click &ldquo;Name&rdquo; header to preview)</h2>
    <TableWithMultipleOnClicks />
    <br />
    <h2>Table with some rows selected. Table will not select or deselect any row</h2>
    <TableWithHighlightedRows />
    <br />
    <h2>Single Selectable table</h2>
    <SingleRowSelectableTable />
    <br />
    <h2>Single Selectable table with second row as non selectable</h2>
    <TableWithNonSelectableRow />
    <br />
    <h2>Table with sorting indicator</h2>
    <TableWithSortingIndicator />
    <br />
    <h2>Table with long content</h2>
    <TableWithLongContent />
    <br />
    <h2>Table with custom cells</h2>
    <TableWithCustomCells />
    <br />
    <h2>Table with subheaders</h2>
    <TableWithSubheaders />
  </div>
);

export default TableExamples;
