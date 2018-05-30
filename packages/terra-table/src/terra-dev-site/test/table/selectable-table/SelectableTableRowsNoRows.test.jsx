import React from 'react';
import Table from '../../../../Table';

const SelectableTableRowsExample = () => (
  <Table isStriped={false}>
    <Table.Header>
      <Table.HeaderCell content="Name" key="NAME" minWidth="small" />
      <Table.HeaderCell content="Address" key="ADDRESS" minWidth="medium" />
      <Table.HeaderCell content="Phone Number" key="PHONE_NUMBER" minWidth="large" />
    </Table.Header>
    <Table.SelectableTableRows />
  </Table>
);

export default SelectableTableRowsExample;
