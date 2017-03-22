import React from 'react';
import Table from '../src/Table';

const StripedTable = () => (
  <Table>
    <Table.Header>
      <Table.HeaderContent display={'Column Heading 1'} key={1} minWidth={'small'} />
      <Table.HeaderContent display={'Column Heading 2'} key={2} minWidth={'medium'} sort={'asc'}/>
      <Table.HeaderContent display={'Column Heading 3'} key={3} minWidth={'large'} />
    </Table.Header>
    <Table.Rows>
      <Table.Row key={0}>
        <Table.RowContent display={'Vey long button text'} key={1} />
        <Table.RowContent display={'Vey long button text'} key={2} />
        <Table.RowContent display={'Vey long button text'} key={3} />
      </Table.Row>
      <Table.Row key={1}>
        <Table.RowContent display={'Vey long button text'} key={1} />
        <Table.RowContent display={'Vey long button text'} key={2} />
        <Table.RowContent display={'Vey long button text'} key={3} />
      </Table.Row>
      <Table.Row key={2}>
        <Table.RowContent display={'Vey long button text'} key={1} />
        <Table.RowContent display={'Vey long button text'} key={2} />
        <Table.RowContent display={'Vey long button text'} key={3} />
      </Table.Row>
    </Table.Rows>
  </Table>
);

export default StripedTable;