import React from 'react';
import Table, {
  Row, Cell,
} from '../../../index';

const RowTest = () => (
  <Table>
    <Row key="default-row">
      <Cell>Default Row</Cell>
    </Row>
    <Row key="striped-row" isStriped>
      <Cell>Striped Row</Cell>
    </Row>
    <Row key="selectable-row" isSelectable id="selectable-row">
      <Cell>Selectable Row</Cell>
    </Row>
    <Row key="selected-row" isSelectable isSelected>
      <Cell>Selected Row</Cell>
    </Row>
    <Row key="striped-selected-row" isSelectable isSelected isStriped>
      <Cell>Striped Selected Row</Cell>
    </Row>
    <Row key="selection-checkmark">
      <Cell>Selection Style Checkmark</Cell>
    </Row>
    <Row key="selection-chevron">
      <Cell>Selection Style Chevron</Cell>
    </Row>
  </Table>
);

export default RowTest;
