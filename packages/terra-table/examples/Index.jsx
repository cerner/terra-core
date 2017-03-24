/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
import Table from '../src/Table';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TableSrc from '!raw-loader!../src/Table.jsx';
import SingleSelectableRowsSrc from '!raw-loader!../src/SingleSelectableRows.jsx';
import TableHeaderSrc from '!raw-loader!../src/TableHeader.jsx';
import TableHeaderContentSrc from '!raw-loader!../src/TableHeaderContent.jsx';
import TableRowSrc from '!raw-loader!../src/TableRow.jsx';
import TableRowsSrc from '!raw-loader!../src/TableRows.jsx';
import TableRowContentSrc from '!raw-loader!../src/TableRowContent.jsx';

import NoStripedTable from './NoStripedTable';
import StripedTable from './StripedTable';
import TableWithHighlightedRows from './TableWithHighlightedRows';
import SingleRowSelectableTable from './SingleRowSelectableTable';
import TableWithNonSelectableRow from './TableWithNonSelectableRow';
import TableWithSortingIndicator from './TableWithSortingIndicator';
import TableWithMaxHeight from './TableWithMaxHeight';

const TableExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Table</h2>
    <PropsTable id="props-table" src={TableSrc} />
    <h2>Table Header</h2>
    <PropsTable id="props-tableHeader" src={TableHeaderSrc} />
    <h2>Table Header Content</h2>
    <PropsTable id="props-tableHeaderContent" src={TableHeaderContentSrc} />
    <h2>Table Rows</h2>
    <PropsTable id="props-tableRows" src={TableRowsSrc} />
    <h2>Single Selectable Table Row</h2>
    <PropsTable id="props-singleSelectableRows" src={SingleSelectableRowsSrc} />
    <h2>Table Row</h2>
    <PropsTable id="props-tableRow" src={TableRowSrc} />
    <h2>Table Row Content</h2>
    <PropsTable id="props-tableRowContent" src={TableRowContentSrc} />
    <h2>Table without zebra stripes</h2>
    <NoStripedTable />
    <h2>Table with zebra stripes</h2>
    <StripedTable />
    <h2>Table with some rows selected. Table will not select or deselect any row</h2>
    <TableWithHighlightedRows />
    <h2>Selectable table. Only one row can be selected</h2>
    <SingleRowSelectableTable />
    <h2>Selectable table with second row as non selectable</h2>
    <TableWithNonSelectableRow />
    <h2>Table with sorting indicator</h2>
    <TableWithSortingIndicator />
    <h2>Table with maximum height set on row and header</h2>
    <TableWithMaxHeight />
    <h2>Other table</h2>
    <Table>
      <Table.Header>
        <Table.HeaderContent display={'Column Heading 1 Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={1} minWidth={'huge'} />
        <Table.HeaderContent display={'Column Heading 2'} key={2} minWidth={'medium'} sort={'asc'}/>
        <Table.HeaderContent display={'Column Heading 3 Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={3} minWidth={'large'} />
      </Table.Header>
      <Table.SingleSelectableRows>
        <Table.Row isSelected isSelectable={false} key={0}>
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={1} />
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={2} />
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={3} />
        </Table.Row>
        <Table.Row isSelected key={1}>
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={1} />
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={2} />
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={3} />
        </Table.Row>
        <Table.Row isSelected={false} key={2}>
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={1} />
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={2} />
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={3} />
        </Table.Row>
      </Table.SingleSelectableRows>
    </Table>
  </div>
);

export default TableExamples;
