import React from 'react';
import Table, {
  HeaderCell,
  Cell,
  Row,
  Header,
  Body,
} from 'terra-html-table';

const RowHeaderTable = () => (
  <Table paddingStyle="compact">
    <caption>
      Availability Status by Shift Time (table with row header cells as first column)
    </caption>
    <Header>
      <HeaderCell key="TIME">Shift Time</HeaderCell>
      <HeaderCell key="MON">Monday</HeaderCell>
      <HeaderCell key="TUE">Tuesday</HeaderCell>
      <HeaderCell key="WED">Wednesday</HeaderCell>
      <HeaderCell key="THU">Thursday</HeaderCell>
      <HeaderCell key="FRI">Friday</HeaderCell>
    </Header>
    <Body>
      <Row>
        <HeaderCell key="TIME">09:00 – 11:00</HeaderCell>
        <Cell key="MON">Closed</Cell>
        <Cell key="TUE">Open</Cell>
        <Cell key="WED">Open</Cell>
        <Cell key="THU">Closed</Cell>
        <Cell key="FRI">Closed</Cell>
      </Row>
      <Row>
        <HeaderCell key="TIME">11:00 – 13:00</HeaderCell>
        <Cell key="MON">Open</Cell>
        <Cell key="TUE">Closed</Cell>
        <Cell key="WED">Closed</Cell>
        <Cell key="THU">Closed</Cell>
        <Cell key="FRI">Open</Cell>
      </Row>
      <Row>
        <HeaderCell key="TIME">13:00 – 15:00</HeaderCell>
        <Cell key="MON">Open</Cell>
        <Cell key="TUE">Open</Cell>
        <Cell key="WED">Open</Cell>
        <Cell key="THU">Closed</Cell>
        <Cell key="FRI">Closed</Cell>
      </Row>
      <Row>
        <HeaderCell key="TIME">15:00 – 17:00</HeaderCell>
        <Cell key="MON">Closed</Cell>
        <Cell key="TUE">Closed</Cell>
        <Cell key="WED">Closed</Cell>
        <Cell key="THU">Open</Cell>
        <Cell key="FRI">Open</Cell>
      </Row>
    </Body>
  </Table>
);

export default RowHeaderTable;
