import React from 'react';
import TableCellGrid, {
  CellGrid, Cell,
} from '../../../index';

const PaddingTest = () => (
  <React.Fragment>
    <TableCellGrid
      paddingStyle="standard"
      key="table-1"
    >
      <CellGrid>
        <Cell isPadded>Cell Standard</Cell>
      </CellGrid>
    </TableCellGrid>
    <TableCellGrid
      paddingStyle="compact"
      key="table-2"
    >
      <CellGrid>
        <Cell>Cell Compact</Cell>
      </CellGrid>
    </TableCellGrid>
  </React.Fragment>
);

export default PaddingTest;
