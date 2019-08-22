import React from 'react';
import TableCellGrid, {
  CellGrid, Cell,
} from '../../../index';

const CellGridTest = () => (
  <TableCellGrid>
    <CellGrid key="default-row">
      <Cell>Default Row</Cell>
    </CellGrid>
    <CellGrid key="striped-row" isStriped>
      <Cell>Striped Row</Cell>
    </CellGrid>
    <CellGrid key="selectable-row" isSelectable id="selectable-row">
      <Cell>Selectable Row</Cell>
    </CellGrid>
    <CellGrid key="selected-row" isSelectable isSelected>
      <Cell>Selected Row</Cell>
    </CellGrid>
    <CellGrid key="striped-selected-row" isSelectable isSelected isStriped>
      <Cell>Striped Selected Row</Cell>
    </CellGrid>
  </TableCellGrid>
);

export default CellGridTest;
