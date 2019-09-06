import React from 'react';
import Table, {
  Body,
  Header,
  HeaderCell,
  Row,
  Cell,
} from '../../../index';

const SingleRowTable = () => (
  <Table isStriped={false}>
    <Header>
      <HeaderCell key="NAME">Name</HeaderCell>
      <HeaderCell key="ADDRESS">Address</HeaderCell>
      <HeaderCell key="PHONE_NUMBER">Phone Number</HeaderCell>
    </Header>
    <Body className="TableRows">
      <Row key="PERSON_0">
        <Cell key="NAME">John Smith</Cell>
        <Cell key="ADDRESS">123 Adams Drive</Cell>
        <Cell key="PHONE_NUMBER">111-222-3333</Cell>
      </Row>
    </Body>
  </Table>
);

export default SingleRowTable;
