import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Table from 'terra-table/lib/Table';

const StripedTable = () => (
  <Table>
    <Table.Header>
      <Table.HeaderCell key="NAME" minWidth="small">Name</Table.HeaderCell>
      <Table.HeaderCell key="ADDRESS" minWidth="medium">Address</Table.HeaderCell>
      <Table.HeaderCell key="PHONE_NUMBER" minWidth="large">Phone Number</Table.HeaderCell>
    </Table.Header>
    <Table.Body>
      <Table.Row key="PERSON_0">
        <Table.Cell key="NAME">John Smith</Table.Cell>
        <Table.Cell key="ADDRESS">123 Adams Drive</Table.Cell>
        <Table.Cell key="PHONE_NUMBER">111-222-3333</Table.Cell>
      </Table.Row>
      <Table.Row key="PERSON_1">
        <Table.Cell key="NAME">Jane Smith</Table.Cell>
        <Table.Cell key="ADDRESS">321 Drive Street</Table.Cell>
        <Table.Cell key="PHONE_NUMBER">111-222-3333</Table.Cell>
      </Table.Row>
      <Table.Row key="PERSON_2">
        <Table.Cell key="NAME">Dave Smith</Table.Cell>
        <Table.Cell key="ADDRESS">213 Raymond Road</Table.Cell>
        <Table.Cell key="PHONE_NUMBER">111-222-3333</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default StripedTable;
