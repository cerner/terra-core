import React from 'react';
import Table, {
  Row, Cell,
} from '../../../index';

const StripedTableTest = () => (
  <Table
    id="Table"
  >
    <Row key="ROW-0">
      <Cell>Cell Content</Cell>
    </Row>
    <Row key="ROW-1" isStriped>
      <Cell>Cell Content</Cell>
    </Row>
    <Row key="ROW-2">
      <Cell>Cell Content</Cell>
    </Row>
  </Table>
);

export default StripedTableTest;
