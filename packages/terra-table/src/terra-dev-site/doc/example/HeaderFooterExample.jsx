import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, {
  HeaderRow, HeaderCell, Row, Cell,
} from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import FixedNode from '../common/FixedNode';

const HeaderFooterExample = () => (
  <Table
    headerNode={<FixedNode title="Header" />}
    footerNode={<FixedNode title="Footer" />}
    paddingStyle="standard"
    id="Table"
    headerRow={(
      <HeaderRow>
        <HeaderCell key="NAME" isPadded>Name</HeaderCell>
        <HeaderCell key="ADDRESS" isPadded>Address</HeaderCell>
        <HeaderCell key="PHONE_NUMBER" isPadded>Phone Number</HeaderCell>
      </HeaderRow>
    )}
  >
    <Row key="PERSON_0">
      <Cell isPadded key="NAME">John Smith</Cell>
      <Cell isPadded key="ADDRESS">123 Adams Drive</Cell>
      <Cell isPadded key="PHONE_NUMBER">111-222-3333</Cell>
    </Row>
    <Row isSelected key="PERSON_1">
      <Cell isPadded key="NAME">Jane Smith</Cell>
      <Cell isPadded key="ADDRESS">321 Drive Street</Cell>
      <Cell isPadded key="PHONE_NUMBER">111-222-3333</Cell>
    </Row>
    <Row isSelectable key="PERSON_2">
      <Cell isPadded key="NAME">Dave Smith</Cell>
      <Cell isPadded key="ADDRESS">213 Raymond Road</Cell>
      <Cell isPadded key="PHONE_NUMBER">111-222-3333</Cell>
    </Row>
  </Table>
);

export default HeaderFooterExample;
