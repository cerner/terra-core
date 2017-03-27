/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Table from 'terra-table';

const TableWithSortingIndicator = () => (
  <Table isStriped={false}>
    <Table.Header>
      <Table.HeaderContent display={'Column Heading 1'} key={1} minWidth={'small'} />
      <Table.HeaderContent display={'Column Heading 2'} key={2} minWidth={'medium'} sort={'asc'} />
      <Table.HeaderContent display={'Column Heading 3'} key={3} minWidth={'large'} />
    </Table.Header>
    <Table.SingleSelectableRows>
      <Table.Row key={0}>
        <Table.RowContent display={'Table Data'} key={1} />
        <Table.RowContent display={'Table Data'} key={2} />
        <Table.RowContent display={'Table Data'} key={3} />
      </Table.Row>
      <Table.Row key={1}>
        <Table.RowContent display={'Table Data'} key={1} />
        <Table.RowContent display={'Table Data'} key={2} />
        <Table.RowContent display={'Table Data'} key={3} />
      </Table.Row>
      <Table.Row key={2}>
        <Table.RowContent display={'Table Data'} key={1} />
        <Table.RowContent display={'Table Data'} key={2} />
        <Table.RowContent display={'Table Data'} key={3} />
      </Table.Row>
    </Table.SingleSelectableRows>
  </Table>
);

export default TableWithSortingIndicator;
