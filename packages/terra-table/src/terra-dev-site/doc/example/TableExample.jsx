import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, {
  HeaderRow, HeaderCell, Row, Cell,
} from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const DefaultTable = () => (
  <Table
    id="Table"
    headerRow={(
      <HeaderRow>
        <HeaderCell key="NAME">Name</HeaderCell>
        <HeaderCell key="ADDRESS">Address</HeaderCell>
        <HeaderCell key="PHONE_NUMBER">Phone Number</HeaderCell>
      </HeaderRow>
    )}
  >
    <Row key="PERSON_0">
      <Cell removeInner key="NAME">John Smith</Cell>
      <Cell removeInner key="ADDRESS">123 Adams Drive</Cell>
      <Cell removeInner key="PHONE_NUMBER">111-222-3333</Cell>
    </Row>
    <Row key="PERSON_1">
      <Cell removeInner key="NAME">Jane Smith</Cell>
      <Cell removeInner key="ADDRESS">321 Drive Street</Cell>
      <Cell removeInner key="PHONE_NUMBER">111-222-3333</Cell>
    </Row>
    <Row key="PERSON_2">
      <Cell removeInner key="NAME">Dave Smith</Cell>
      <Cell removeInner key="ADDRESS">213 Raymond Road</Cell>
      <Cell removeInner key="PHONE_NUMBER">111-222-3333</Cell>
    </Row>
  </Table>
);

export default DefaultTable;
