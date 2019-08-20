import React from 'react';
import TableCellGrid, {
  CellGrid, Cell, HeaderCellGrid, HeaderCell,
} from '../../../index';

const TableCellGridTest = () => (
  <TableCellGrid
    headerCellGrid={(
      <HeaderCellGrid>
        <HeaderCell>HeaderContent</HeaderCell>
      </HeaderCellGrid>
    )}
  >
    <CellGrid>
      <Cell>Cell Content</Cell>
    </CellGrid>
  </TableCellGrid>
);

export default TableCellGridTest;
