import React from 'react';
import Table from 'terra-table/lib/Table';

const TableWithLongContent = () => (
  <Table isStriped={false}>
    <Table.Header>
      <Table.HeaderCell content="Column Heading 1" key="COLUMN_0" minWidth="small" />
      <Table.HeaderCell content="Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header End Header" key="COLUMN_1" minWidth="medium" />
      <Table.HeaderCell content="Column Heading 3" key="COLUMN_2" minWidth="large" />
    </Table.Header>
    <Table.SingleSelectableRows>
      <Table.Row key="ROW_0">
        <Table.Cell content="Table Data" key="COLUMN_0" />
        <Table.Cell content="Table Data" key="COLUMN_1" />
        <Table.Cell content="Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text" key="COLUMN_2" />
      </Table.Row>
      <Table.Row key="ROW_1">
        <Table.Cell content="Table Data" key="COLUMN_0" />
        <Table.Cell content="Table Data" key="COLUMN_1" />
        <Table.Cell content="Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text" key="COLUMN_2" />
      </Table.Row>
      <Table.Row key="ROW_2">
        <Table.Cell content="Table Data" key="COLUMN_0" />
        <Table.Cell content="Table Data" key="COLUMN_1" />
        <Table.Cell content="Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text" key="COLUMN_2" />
      </Table.Row>
    </Table.SingleSelectableRows>
  </Table>
);

export default TableWithLongContent;
