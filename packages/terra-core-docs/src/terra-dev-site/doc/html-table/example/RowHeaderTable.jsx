import React from 'react';
import Table, {
  HeaderCell,
  Cell,
  Row,
  Header,
  Body,
} from 'terra-html-table';

const RowHeaderTable = () => (
  <Table paddingStyle="compact" disableStripes>
    <caption>
      Requested Quantities from the Last Six Months (table with row header cells in an offset column)
    </caption>
    <Header>
      <HeaderCell key="ID"><abbr title="Identification Number">ID</abbr></HeaderCell>
      <HeaderCell key="NAME">Name</HeaderCell>
      <HeaderCell key="JUL">July</HeaderCell>
      <HeaderCell key="AUG">August</HeaderCell>
      <HeaderCell key="SEPT">September</HeaderCell>
      <HeaderCell key="OCT">October</HeaderCell>
      <HeaderCell key="NOV">November</HeaderCell>
      <HeaderCell key="DEC">December</HeaderCell>
    </Header>
    <Body>
      <Row>
        <Cell key="ID">215</Cell>
        <HeaderCell key="NAME">Abel</HeaderCell>
        <Cell key="JUL">5</Cell>
        <Cell key="AUG">2</Cell>
        <Cell key="SEPT">0</Cell>
        <Cell key="OCT">0</Cell>
        <Cell key="NOV">0</Cell>
        <Cell key="DEC">3</Cell>
      </Row>
      <Row>
        <Cell key="ID">231</Cell>
        <HeaderCell key="NAME">Annette </HeaderCell>
        <Cell key="JUL">0</Cell>
        <Cell key="AUG">5</Cell>
        <Cell key="SEPT">3</Cell>
        <Cell key="OCT">0</Cell>
        <Cell key="NOV">0</Cell>
        <Cell key="DEC">6</Cell>
      </Row>
      <Row>
        <Cell key="ID">173</Cell>
        <HeaderCell key="NAME">Bernard</HeaderCell>
        <Cell key="JUL">2</Cell>
        <Cell key="AUG">0</Cell>
        <Cell key="SEPT">0</Cell>
        <Cell key="OCT">5</Cell>
        <Cell key="NOV">0</Cell>
        <Cell key="DEC">0</Cell>
      </Row>
      <Row>
        <Cell key="ID">141</Cell>
        <HeaderCell key="NAME">Gerald</HeaderCell>
        <Cell key="JUL">0</Cell>
        <Cell key="AUG">10</Cell>
        <Cell key="SEPT">0</Cell>
        <Cell key="OCT">0</Cell>
        <Cell key="NOV">0</Cell>
        <Cell key="DEC">8</Cell>
      </Row>
      <Row>
        <Cell key="ID">99</Cell>
        <HeaderCell key="NAME">Michael</HeaderCell>
        <Cell key="JUL">8</Cell>
        <Cell key="AUG">8</Cell>
        <Cell key="SEPT">8</Cell>
        <Cell key="OCT">8</Cell>
        <Cell key="NOV">0</Cell>
        <Cell key="DEC">4</Cell>
      </Row>
    </Body>
  </Table>
);

export default RowHeaderTable;
