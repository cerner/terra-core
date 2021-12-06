import React from 'react';
import Table, {
  Header,
  HeaderCell,
  Body,
  Cell,
  Row,
} from 'terra-html-table';

const TableWithLongContent = () => (
  <Table>
    <Header>
      <HeaderCell key="COL_0">
        Column Heading 1
      </HeaderCell>
      <HeaderCell key="COL_1">
        Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header End Header
      </HeaderCell>
      <HeaderCell key="COL_2">
        Column Heading 3
      </HeaderCell>
    </Header>
    <Body>
      <Row key="ROW_0">
        <Cell key="COL_0">
          Table Data
        </Cell>
        <Cell key="COL_1">
          Table Data
        </Cell>
        <Cell key="COL_2">
          Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text
        </Cell>
      </Row>
      <Row key="ROW_1">
        <Cell key="COL_0">
          Table Data
        </Cell>
        <Cell key="COL_1">
          Table Data
        </Cell>
        <Cell key="COL_2">
          Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text
        </Cell>
      </Row>
      <Row key="ROW_2">
        <Cell key="COL_0">
          Table Data
        </Cell>
        <Cell key="COL_1">
          Table Data
        </Cell>
        <Cell key="COL_2">
          Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text
        </Cell>
      </Row>
    </Body>
  </Table>
);

export default TableWithLongContent;
