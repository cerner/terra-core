import React from 'react';
import Table, {
  HeaderCell,
  Cell,
  Row,
  Header,
  Body,
} from 'terra-html-table';

const RowHeaderTable = () => (
  <Table>
    <Header>
      <Cell />
      <HeaderCell>Monday</HeaderCell>
      <HeaderCell>Tuesday</HeaderCell>
      <HeaderCell>Wednesday</HeaderCell>
      <HeaderCell>Thursday</HeaderCell>
      <HeaderCell>Friday</HeaderCell>
    </Header>
    <Body>
      <Row>
        <Header><HeaderCell>09:00 – 11:00</HeaderCell></Header>
        <Cell>Closed</Cell>
        <Cell>Open</Cell>
        <Cell>Open</Cell>
        <Cell>Closed</Cell>
        <Cell>Closed</Cell>
      </Row>
      <Row>
        <HeaderCell>11:00 – 13:00</HeaderCell>
        <Cell>Open</Cell>
        <Cell>Open</Cell>
        <Cell>Closed</Cell>
        <Cell>Closed</Cell>
        <Cell>Closed</Cell>
      </Row>
      <Row>
        <HeaderCell>13:00 – 15:00</HeaderCell>
        <Cell>Open</Cell>
        <Cell>Open</Cell>
        <Cell>Open</Cell>
        <Cell>Closed</Cell>
        <Cell>Closed</Cell>
      </Row>
      <Row>
        <HeaderCell>15:00 – 17:00</HeaderCell>
        <Cell>Closed</Cell>
        <Cell>Closed</Cell>
        <Cell>Closed</Cell>
        <Cell>Open</Cell>
        <Cell>Open</Cell>
      </Row>
    </Body>
  </Table>
);

export default RowHeaderTable;
