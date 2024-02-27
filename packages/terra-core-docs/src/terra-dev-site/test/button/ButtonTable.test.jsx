import React from 'react';
import Button from 'terra-button';
import Table, {
  Header,
  HeaderCell,
  Body,
  Cell,
  Row,
} from 'terra-html-table';

const ButtonTable = () => (
  <Table paddingStyle="compact" id="table-button">
    <Header>
      <HeaderCell key="NAME">Name</HeaderCell>
      <HeaderCell key="ADDRESS">Address</HeaderCell>
    </Header>
    <Body>
      <Row key="PERSON_0">
        <Cell key="NAME"><><Button type="button" id="button1" isCompact aria-label="Alert" text="Alert 1" /></></Cell>
        <Cell key="ADDRESS">123 Adams Drive</Cell>
      </Row>
      <Row key="PERSON_1">
        <Cell key="NAME"><><Button type="button" id="button2" isCompact aria-label="Alert" text="Alert 2" /></></Cell>
        <Cell key="ADDRESS">321 Drive Street</Cell>
      </Row>
    </Body>
  </Table>
);

export default ButtonTable;
