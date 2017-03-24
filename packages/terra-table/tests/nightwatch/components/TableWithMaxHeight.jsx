import React from 'react';
import Table from '../../../lib/Table';

const TableWithMaxHeight = () => (
  <Table isStriped={false}>
    <Table.Header height={'small'}>
      <Table.HeaderContent display={'Column Heading 1'} key={1} minWidth={'small'} />
      <Table.HeaderContent display={'Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header End Header'} key={2} minWidth={'medium'} />
      <Table.HeaderContent display={'Column Heading 3'} key={3} minWidth={'large'} />
    </Table.Header>
    <Table.SingleSelectableRows height={'small'}>
      <Table.Row key={0}>
        <Table.RowContent display={'Table Data'} key={1} />
        <Table.RowContent display={'Table Data'} key={2} />
        <Table.RowContent display={'Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text'} key={3} />
      </Table.Row>
      <Table.Row key={1}>
        <Table.RowContent display={'Table Data'} key={1} />
        <Table.RowContent display={'Table Data'} key={2} />
        <Table.RowContent display={'Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text'} key={3} />
      </Table.Row>
      <Table.Row key={2}>
        <Table.RowContent display={'Table Data'} key={1} />
        <Table.RowContent display={'Table Data'} key={2} />
        <Table.RowContent display={'Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text'} key={3} />
      </Table.Row>
    </Table.SingleSelectableRows>
  </Table>
);

export default TableWithMaxHeight;