import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, {
  Header,
  HeaderCell,
  Body,
  Cell,
  Row,
} from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableWithLongContent = () => (
  <Table isStriped={false}>
    <Header>
      <HeaderCell key="COL_0" minWidth="small">
        Column Heading 1
      </HeaderCell>
      <HeaderCell key="COL_1" minWidth="medium">
        Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header End Header
      </HeaderCell>
      <HeaderCell key="COL_2" minWidth="large">
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
