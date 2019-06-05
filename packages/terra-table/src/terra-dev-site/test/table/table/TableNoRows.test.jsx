import React from 'react';
import Table, {
  Body,
  Header,
  HeaderCell,
} from '../../../../index';

const SingleRowTable = () => (
  <Table isStriped={false}>
    <Header>
      <HeaderCell content="Name" key="NAME" minWidth="small" />
      <HeaderCell content="Address" key="ADDRESS" minWidth="medium" />
      <HeaderCell content="Phone Number" key="PHONE_NUMBER" minWidth="large" />
    </Header>
    <Body className="TableRows" />
  </Table>
);

export default SingleRowTable;
