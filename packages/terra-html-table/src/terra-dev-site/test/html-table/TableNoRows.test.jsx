import React from 'react';
import Table, {
  Body,
  Header,
  HeaderCell,
} from '../../../index';

const SingleRowTable = () => (
  <Table isStriped={false}>
    <Header>
      <HeaderCell key="NAME">Name</HeaderCell>
      <HeaderCell key="ADDRESS">Address</HeaderCell>
      <HeaderCell key="PHONE_NUMBER">Phone Number</HeaderCell>
    </Header>
    <Body className="TableRows" />
  </Table>
);

export default SingleRowTable;
