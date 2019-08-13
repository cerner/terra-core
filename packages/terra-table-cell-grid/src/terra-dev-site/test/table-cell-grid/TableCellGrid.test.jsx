import React from 'react';
import TableCellGrid, {
  CellGrid, Cell,
} from '../../../index';

const DefaultTableTest = () => (
  <TableCellGrid
    id="Table"
  >
    <CellGrid key="ROW-0">
      <Cell>Cell Content</Cell>
    </CellGrid>
    <CellGrid key="ROW-1">
      <Cell>Cell Content</Cell>
    </CellGrid>
    <CellGrid key="ROW-2">
      <Cell>Cell Content</Cell>
    </CellGrid>
  </TableCellGrid>
);

export default DefaultTableTest;
