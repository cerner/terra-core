import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Table from 'terra-table/lib/Table';

const TableWithLongContent = () => (
  <Table isStriped={false}>
    <Table.Header>
      <Table.HeaderCell key="COL_0" minWidth="small">
        Column Heading 1
      </Table.HeaderCell>
      <Table.HeaderCell key="COL_1" minWidth="medium">
        Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header End Header
      </Table.HeaderCell>
      <Table.HeaderCell key="COL_2" minWidth="large">
        Column Heading 3
      </Table.HeaderCell>
    </Table.Header>
    <Table.Body>
      <Table.Row key="ROW_0">
        <Table.Cell key="COL_0">
          Table Data
        </Table.Cell>
        <Table.Cell key="COL_1">
          Table Data
        </Table.Cell>
        <Table.Cell key="COL_2">
          Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text
        </Table.Cell>
      </Table.Row>
      <Table.Row key="ROW_1">
        <Table.Cell key="COL_0">
          Table Data
        </Table.Cell>
        <Table.Cell key="COL_1">
          Table Data
        </Table.Cell>
        <Table.Cell key="COL_2">
          Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text
        </Table.Cell>
      </Table.Row>
      <Table.Row key="ROW_2">
        <Table.Cell key="COL_0">
          Table Data
        </Table.Cell>
        <Table.Cell key="COL_1">
          Table Data
        </Table.Cell>
        <Table.Cell key="COL_2">
          Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default TableWithLongContent;
