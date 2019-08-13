import React from 'react';
import TableCellGrid, {
  CellGrid, Cell,
} from '../../../index';

const PaddingTableTest = () => (
  <React.Fragment>
    <TableCellGrid
      paddingStyle="standard"
      id="Table-Standard"
      key="table-1"
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
    <TableCellGrid
      paddingStyle="compact"
      id="Table-Compact"
      key="table-2"
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
  </React.Fragment>
);

export default PaddingTableTest;
