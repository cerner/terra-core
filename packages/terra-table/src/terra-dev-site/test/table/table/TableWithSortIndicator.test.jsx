/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Table, {
  Body,
  Header,
  HeaderCell,
  Row,
  Cell,
} from '../../../../index';

const TableWithSortingIndicator = () => (
  <Table isStriped={false}>
    <Header>
      <HeaderCell content="Name" key="NAME" minWidth="small" />
      <HeaderCell content="Address" key="ADDRESS" minWidth="medium" sort="asc" />
      <HeaderCell content="Phone Number" key="PHONE_NUMBER" minWidth="large" />
    </Header>
    <Body>
      <Row key="PERSON_0">
        <Cell content="John Smith" key="NAME" />
        <Cell content="123 Adams Drive" key="ADDRESS" />
        <Cell content="111-222-3333" key="PHONE_NUMBER" />
      </Row>
      <Row key="PERSON_1">
        <Cell content="Jane Smith" key="NAME" />
        <Cell content="321 Drive Street" key="ADDRESS" />
        <Cell content="111-222-3333" key="PHONE_NUMBER" />
      </Row>
      <Row key="PERSON_2">
        <Cell content="Dave Smith" key="NAME" />
        <Cell content="213 Raymond Road" key="ADDRESS" />
        <Cell content="111-222-3333" key="PHONE_NUMBER" />
      </Row>
    </Body>
  </Table>
);

export default TableWithSortingIndicator;
