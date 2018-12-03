import React from 'react';
import Table, {
  Header, HeaderCell,
} from '../../../../index';

const TableNoRows = () => (
  <Table
    id="Table"
    header={(
      <Header>
        <HeaderCell key="NAME" minWidth="small">Name</HeaderCell>
        <HeaderCell key="ADDRESS" minWidth="medium">Address</HeaderCell>
        <HeaderCell key="PHONE_NUMBER" minWidth="large">Phone Number</HeaderCell>
      </Header>
    )}
  />
);

export default TableNoRows;
