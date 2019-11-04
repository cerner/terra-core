import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, {
  HeaderRow, HeaderCell, Row, Cell,
} from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import FixedHeight from '../common/FixedHeight';

const FixedHeightTable = () => (
  <FixedHeight>
    <Table
      id="Table"
      fill
      paddingStyle="standard"
      headerRow={(
        <HeaderRow>
          <HeaderCell key="NAME">Name</HeaderCell>
          <HeaderCell key="ADDRESS">Address</HeaderCell>
          <HeaderCell key="PHONE_NUMBER">Phone Number</HeaderCell>
        </HeaderRow>
      )}
    >
      <Row key="PERSON_0">
        <Cell key="NAME">John Smith</Cell>
        <Cell key="ADDRESS">123 Adams Drive</Cell>
        <Cell key="PHONE_NUMBER">111-222-3333</Cell>
      </Row>
      <Row key="PERSON_1" isStriped>
        <Cell key="NAME">Jane Smith</Cell>
        <Cell key="ADDRESS">321 Drive Street</Cell>
        <Cell key="PHONE_NUMBER">111-222-3333</Cell>
      </Row>
      <Row key="PERSON_2">
        <Cell key="NAME">Dave Smith</Cell>
        <Cell key="ADDRESS">213 Raymond Road</Cell>
        <Cell key="PHONE_NUMBER">111-222-3333</Cell>
      </Row>
      <Row key="PERSON_3" isStriped>
        <Cell key="NAME">Bob Smith</Cell>
        <Cell key="ADDRESS">123 Adams Drive</Cell>
        <Cell key="PHONE_NUMBER">111-222-3333</Cell>
      </Row>
      <Row key="PERSON_4">
        <Cell key="NAME">Wallaby Smith</Cell>
        <Cell key="ADDRESS">321 Drive Street</Cell>
        <Cell key="PHONE_NUMBER">111-222-3333</Cell>
      </Row>
      <Row key="PERSON_5" isStriped>
        <Cell key="NAME">Potato Smith</Cell>
        <Cell key="ADDRESS">213 Raymond Road</Cell>
        <Cell key="PHONE_NUMBER">111-222-3333</Cell>
      </Row>
      <Row key="PERSON_6">
        <Cell key="NAME">Dolphin Smith</Cell>
        <Cell key="ADDRESS">123 Adams Drive</Cell>
        <Cell key="PHONE_NUMBER">111-222-3333</Cell>
      </Row>
      <Row key="PERSON_7" isStriped>
        <Cell key="NAME">Orc Smith</Cell>
        <Cell key="ADDRESS">321 Drive Street</Cell>
        <Cell key="PHONE_NUMBER">111-222-3333</Cell>
      </Row>
      <Row key="PERSON_8">
        <Cell key="NAME">Lava Smith</Cell>
        <Cell key="ADDRESS">213 Raymond Road</Cell>
        <Cell key="PHONE_NUMBER">111-222-3333</Cell>
      </Row>
    </Table>
  </FixedHeight>
);

export default FixedHeightTable;
