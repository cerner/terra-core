/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Table from 'terra-table';

const TableWithMaxHeight = () => (
  <Table isStriped={false}>
    <Table.Header height={'small'}>
      <Table.HeaderContent content={'Column Heading 1'} key={'COLUMN_0'} minWidth={'small'} />
      <Table.HeaderContent content={'Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header End Header'} key={'COLUMN_1'} minWidth={'medium'} />
      <Table.HeaderContent content={'Column Heading 3'} key={'COLUMN_2'} minWidth={'large'} />
    </Table.Header>
    <Table.SingleSelectableRows height={'small'}>
      <Table.Row key={'ROW_0'}>
        <Table.RowContent content={'Table Data'} key={'COLUMN_0'} />
        <Table.RowContent content={'Table Data'} key={'COLUMN_1'} />
        <Table.RowContent content={'Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text'} key={'COLUMN_2'} />
      </Table.Row>
      <Table.Row key={'ROW_1'}>
        <Table.RowContent content={'Table Data'} key={'COLUMN_0'} />
        <Table.RowContent content={'Table Data'} key={'COLUMN_1'} />
        <Table.RowContent content={'Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text'} key={'COLUMN_2'} />
      </Table.Row>
      <Table.Row key={'ROW_2'}>
        <Table.RowContent content={'Table Data'} key={'COLUMN_0'} />
        <Table.RowContent content={'Table Data'} key={'COLUMN_1'} />
        <Table.RowContent content={'Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text'} key={'COLUMN_2'} />
      </Table.Row>
    </Table.SingleSelectableRows>
  </Table>
);

export default TableWithMaxHeight;
