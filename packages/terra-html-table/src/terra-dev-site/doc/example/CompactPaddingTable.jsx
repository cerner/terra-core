import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, {
  Header,
  HeaderCell,
  Body,
  Cell,
  Row,
} from 'terra-html-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const CompactPaddingTable = () => (
  <Table paddingStyle="compact">
    <Header>
      <HeaderCell key="NAME">Name</HeaderCell>
      <HeaderCell key="ADDRESS">Address</HeaderCell>
      <HeaderCell key="PHONE_NUMBER">Phone Number</HeaderCell>
    </Header>
    <Body>
      <Row key="PERSON_0">
        <Cell key="NAME">John Smith</Cell>
        <Cell key="ADDRESS">123 Adams Drive</Cell>
        <Cell key="PHONE_NUMBER">111-222-3333</Cell>
      </Row>
      <Row key="PERSON_1">
        <Cell key="NAME">Jane Smith</Cell>
        <Cell key="ADDRESS">321 Drive Street</Cell>
        <Cell key="PHONE_NUMBER">111-222-3333</Cell>
      </Row>
      <Row key="PERSON_2">
        <Cell key="NAME">Dave Smith</Cell>
        <Cell key="ADDRESS">213 Raymond Road</Cell>
        <Cell key="PHONE_NUMBER">111-222-3333</Cell>
      </Row>
    </Body>
  </Table>
);

export default CompactPaddingTable;
