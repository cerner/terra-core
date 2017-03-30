/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Table from '../../../lib/Table';

const TableWithSortingIndicator = () => (
  <Table isStriped={false}>
    <Table.Header>
      <Table.HeaderContent content={'Column Heading 1'} key={1} minWidth={'small'} />
      <Table.HeaderContent content={'Column Heading 2'} key={2} minWidth={'medium'} sort={'asc'} />
      <Table.HeaderContent content={'Column Heading 3'} key={3} minWidth={'large'} />
    </Table.Header>
    <Table.SingleSelectableRows>
      <Table.Row key={0}>
        <Table.RowContent content={'Row 1 Cell 1'} key={1} />
        <Table.RowContent content={'Row 1 Cell 2'} key={2} />
        <Table.RowContent content={'Row 1 Cell 3'} key={3} />
      </Table.Row>
      <Table.Row key={1}>
        <Table.RowContent content={'Row 2 Cell 1'} key={1} />
        <Table.RowContent content={'Row 2 Cell 2'} key={2} />
        <Table.RowContent content={'Row 2 Cell 3'} key={3} />
      </Table.Row>
      <Table.Row key={2}>
        <Table.RowContent content={'Row 3 Cell 1'} key={1} />
        <Table.RowContent content={'Row 3 Cell 2'} key={2} />
        <Table.RowContent content={'Row 3 Cell 3'} key={3} />
      </Table.Row>
    </Table.SingleSelectableRows>
  </Table>
);

export default TableWithSortingIndicator;
