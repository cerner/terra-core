import React from 'react';
import Table, {
  Row, Cell,
} from '../../../../index';

const TableRowTest = () => (
  <Table
    id="Table"
  >
    <Row key="default-row">
      <Cell>Default Row</Cell>
    </Row>
    <Row isSelectable key="selectable-row" id="selectable-row">
      <Cell>Selectable Row</Cell>
    </Row>
    <Row isSelected key="selected-row">
      <Cell>Selected Row</Cell>
    </Row>
  </Table>
);

export default TableRowTest;
