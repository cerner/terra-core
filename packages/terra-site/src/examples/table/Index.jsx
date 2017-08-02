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
import TableCellSrc from '!raw-loader!terra-table/src/TableCell';
import TableSubheaderSrc from '!raw-loader!terra-table/src/TableSubheader';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

import NoStripedTable from './NoStripedTable';
import NoPaddingTable from './NoPaddingTable';
import StripedTable from './StripedTable';
import TableWithHighlightedRows from './TableWithHighlightedRows';
import SingleRowSelectableTable from './SingleRowSelectableTable';
import TableWithNonSelectableRow from './TableWithNonSelectableRow';
import TableWithSortingIndicator from './TableWithSortingIndicator';
import TableWithLongContent from './TableWithLongContent';
import TableWithCustomCells from './TableWithCustomCells';
import TableWithSubheaders from './TableWithSubheaders';

const TableExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Table</h2>
    <PropsTable id="props-table" src={TableSrc} />
    <h2>Table Header</h2>
    <PropsTable id="props-tableHeader" src={TableHeaderSrc} />
    <h2>Table Header Cell</h2>
    <PropsTable id="props-tableHeaderCell" src={TableHeaderCellSrc} />
    <h2>Table Subheader</h2>
    <PropsTable id="props-tableSubheader" src={TableSubheaderSrc} />
    <h2>Table Rows</h2>
    <PropsTable id="props-tableRows" src={TableRowsSrc} />
    <h2>Single Selectable Table Row</h2>
    <PropsTable id="props-singleSelectableRows" src={SingleSelectableRowsSrc} />
    <h2>Table Row</h2>
    <PropsTable id="props-tableRow" src={TableRowSrc} />
    <h2>Table Cell</h2>
    <PropsTable id="props-tablecell" src={TableCellSrc} />
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
    <h2>Table with some rows selected. Table will not select or deselect any row</h2>
    <TableWithHighlightedRows />
    <br />
    <h2>Selectable table</h2>
    <SingleRowSelectableTable />
    <br />
    <h2>Selectable table with second row as non selectable</h2>
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
