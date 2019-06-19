import React from 'react';
import Table, {
  Body,
  Header,
  HeaderCell,
} from '../../../index';

const SingleRowTable = () => (
  <Table isStriped={false}>
    <Header>
      <HeaderCell key="NAME" minWidth="small">Name</HeaderCell>
      <HeaderCell key="ADDRESS" minWidth="medium">Address</HeaderCell>
      <HeaderCell key="PHONE_NUMBER" minWidth="large">Phone Number</HeaderCell>
    </Header>
    <Body className="TableRows" />
  </Table>
);

export default SingleRowTable;
