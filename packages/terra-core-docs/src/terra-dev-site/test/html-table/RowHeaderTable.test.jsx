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
      <HeaderCell scope="col">Monday</HeaderCell>
      <HeaderCell scope="col">Tuesday</HeaderCell>
      <HeaderCell scope="col">Wednesday</HeaderCell>
      <HeaderCell scope="col">Thursday</HeaderCell>
      <HeaderCell scope="col">Friday</HeaderCell>
    </Header>
    <Body>
      <Row>
        <Header><HeaderCell scope="row">09:00 – 11:00</HeaderCell></Header>
        <Cell>Closed</Cell>
        <Cell>Open</Cell>
        <Cell>Open</Cell>
        <Cell>Closed</Cell>
        <Cell>Closed</Cell>
      </Row>
      <Row>
        <Header><HeaderCell scope="row">11:00 – 13:00</HeaderCell></Header>
        <Cell>Open</Cell>
        <Cell>Open</Cell>
        <Cell>Closed</Cell>
        <Cell>Closed</Cell>
        <Cell>Closed</Cell>
      </Row>
      <Row>
        <Header><HeaderCell scope="row">13:00 – 15:00</HeaderCell></Header>
        <Cell>Open</Cell>
        <Cell>Open</Cell>
        <Cell>Open</Cell>
        <Cell>Closed</Cell>
        <Cell>Closed</Cell>
      </Row>
      <Row>
        <Header><HeaderCell scope="row">15:00 – 17:00</HeaderCell></Header>
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
