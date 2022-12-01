import React from 'react';
import Table, {
  HeaderCell,
  Cell,
  Row,
  Header,
  Body,
} from 'terra-html-table';

const RowHeaderTable = () => (
  <>
    <Table paddingStyle="compact">
      <caption>
        Availability Status by Shift Time (table with row header cells as first column)
      </caption>
      <Header>
        <HeaderCell scope="col">Shift Time</HeaderCell>
        <HeaderCell scope="col">Monday</HeaderCell>
        <HeaderCell scope="col">Tuesday</HeaderCell>
        <HeaderCell scope="col">Wednesday</HeaderCell>
        <HeaderCell scope="col">Thursday</HeaderCell>
        <HeaderCell scope="col">Friday</HeaderCell>
      </Header>
      <Body>
        <Row>
          <HeaderCell scope="row">09:00 – 11:00</HeaderCell>
          <Cell>Closed</Cell>
          <Cell>Open</Cell>
          <Cell>Open</Cell>
          <Cell>Closed</Cell>
          <Cell>Closed</Cell>
        </Row>
        <Row>
          <HeaderCell scope="row">11:00 – 13:00</HeaderCell>
          <Cell>Open</Cell>
          <Cell>Open</Cell>
          <Cell>Closed</Cell>
          <Cell>Closed</Cell>
          <Cell>Closed</Cell>
        </Row>
        <Row>
          <HeaderCell scope="row">13:00 – 15:00</HeaderCell>
          <Cell>Open</Cell>
          <Cell>Open</Cell>
          <Cell>Open</Cell>
          <Cell>Closed</Cell>
          <Cell>Closed</Cell>
        </Row>
        <Row>
          <HeaderCell scope="row">15:00 – 17:00</HeaderCell>
          <Cell>Closed</Cell>
          <Cell>Closed</Cell>
          <Cell>Closed</Cell>
          <Cell>Open</Cell>
          <Cell>Open</Cell>
        </Row>
      </Body>
    </Table>
    <br />
    <br />
    <Table paddingStyle="compact" disableStripes>
      <caption>
        Requested Quantities from the Last Six Months (table with row header cells in an offset column)
      </caption>
      <Header>
        <HeaderCell scope="col"><abbr title="Identification Number">ID</abbr></HeaderCell>
        <HeaderCell scope="col">Name</HeaderCell>
        <HeaderCell scope="col">July</HeaderCell>
        <HeaderCell scope="col">August</HeaderCell>
        <HeaderCell scope="col">September</HeaderCell>
        <HeaderCell scope="col">October</HeaderCell>
        <HeaderCell scope="col">November</HeaderCell>
        <HeaderCell scope="col">December</HeaderCell>
      </Header>
      <Body>
        <Row>
          <Cell>215</Cell>
          <HeaderCell scope="row">Abel</HeaderCell>
          <Cell>5</Cell>
          <Cell>2</Cell>
          <Cell>0</Cell>
          <Cell>0</Cell>
          <Cell>0</Cell>
          <Cell>3</Cell>
        </Row>
        <Row>
          <Cell>231</Cell>
          <HeaderCell scope="row">Annette </HeaderCell>
          <Cell>0</Cell>
          <Cell>5</Cell>
          <Cell>3</Cell>
          <Cell>0</Cell>
          <Cell>0</Cell>
          <Cell>6</Cell>
        </Row>
        <Row>
          <Cell>173</Cell>
          <HeaderCell scope="row">Bernard</HeaderCell>
          <Cell>2</Cell>
          <Cell>0</Cell>
          <Cell>0</Cell>
          <Cell>5</Cell>
          <Cell>0</Cell>
          <Cell>0</Cell>
        </Row>
        <Row>
          <Cell>141</Cell>
          <HeaderCell scope="row">Gerald</HeaderCell>
          <Cell>0</Cell>
          <Cell>10</Cell>
          <Cell>0</Cell>
          <Cell>0</Cell>
          <Cell>0</Cell>
          <Cell>8</Cell>
        </Row>
        <Row>
          <Cell>99</Cell>
          <HeaderCell scope="row">Michael</HeaderCell>
          <Cell>8</Cell>
          <Cell>8</Cell>
          <Cell>8</Cell>
          <Cell>8</Cell>
          <Cell>0</Cell>
          <Cell>4</Cell>
        </Row>
      </Body>
    </Table>
  </>
);

export default RowHeaderTable;
