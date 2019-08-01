import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, {
  HeaderCell, Row, Cell,
} from 'terra-table-cell-grid/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import FixedHeight from '../common/FixedHeight';

const FixedHeightTable = () => (
  <FixedHeight>
    <Table
      id="Table"
      fill
      paddingStyle="standard"
      headerCells={[
        <HeaderCell key="NAME" isPadded>Name</HeaderCell>,
        <HeaderCell key="ADDRESS" isPadded>Address</HeaderCell>,
        <HeaderCell key="PHONE_NUMBER" isPadded>Phone Number</HeaderCell>,
      ]}
    >
      <Row key="PERSON_0">
        <Cell key="NAME" isPadded>John Smith</Cell>
        <Cell key="ADDRESS" isPadded>123 Adams Drive</Cell>
        <Cell key="PHONE_NUMBER" isPadded>111-222-3333</Cell>
      </Row>
      <Row key="PERSON_1" isStriped>
        <Cell key="NAME" isPadded>Jane Smith</Cell>
        <Cell key="ADDRESS" isPadded>321 Drive Street</Cell>
        <Cell key="PHONE_NUMBER" isPadded>111-222-3333</Cell>
      </Row>
      <Row key="PERSON_2">
        <Cell key="NAME" isPadded>Dave Smith</Cell>
        <Cell key="ADDRESS" isPadded>213 Raymond Road</Cell>
        <Cell key="PHONE_NUMBER" isPadded>111-222-3333</Cell>
      </Row>
      <Row key="PERSON_3" isStriped>
        <Cell key="NAME" isPadded>Bob Smith</Cell>
        <Cell key="ADDRESS" isPadded>123 Adams Drive</Cell>
        <Cell key="PHONE_NUMBER" isPadded>111-222-3333</Cell>
      </Row>
      <Row key="PERSON_4">
        <Cell key="NAME" isPadded>Wallaby Smith</Cell>
        <Cell key="ADDRESS" isPadded>321 Drive Street</Cell>
        <Cell key="PHONE_NUMBER" isPadded>111-222-3333</Cell>
      </Row>
      <Row key="PERSON_5" isStriped>
        <Cell key="NAME" isPadded>Potato Smith</Cell>
        <Cell key="ADDRESS" isPadded>213 Raymond Road</Cell>
        <Cell key="PHONE_NUMBER" isPadded>111-222-3333</Cell>
      </Row>
      <Row key="PERSON_6">
        <Cell key="NAME" isPadded>Dolphin Smith</Cell>
        <Cell key="ADDRESS" isPadded>123 Adams Drive</Cell>
        <Cell key="PHONE_NUMBER" isPadded>111-222-3333</Cell>
      </Row>
      <Row key="PERSON_7" isStriped>
        <Cell key="NAME" isPadded>Orc Smith</Cell>
        <Cell key="ADDRESS" isPadded>321 Drive Street</Cell>
        <Cell key="PHONE_NUMBER" isPadded>111-222-3333</Cell>
      </Row>
      <Row key="PERSON_8">
        <Cell key="NAME" isPadded>Lava Smith</Cell>
        <Cell key="ADDRESS" isPadded>213 Raymond Road</Cell>
        <Cell key="PHONE_NUMBER" isPadded>111-222-3333</Cell>
      </Row>
    </Table>
  </FixedHeight>
);

export default FixedHeightTable;
