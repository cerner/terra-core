import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, {
  Header, HeaderCell,
} from 'terra-table/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

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
