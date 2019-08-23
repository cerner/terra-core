import React from 'react';
import TableCellGrid, {
  HeaderCell, HeaderCellGrid, CellGrid, Cell,
} from '../../../index';

const HeaderCellGridTest = () => (
  <React.Fragment>
    <TableCellGrid
      key="default"
      headerCellGrid={(
        <HeaderCellGrid>
          <HeaderCell key="cell-0">Cell 0</HeaderCell>
          <HeaderCell key="cell-1">Cell 1</HeaderCell>
          <HeaderCell key="cell-2">Cell 2</HeaderCell>
        </HeaderCellGrid>
      )}
    >
      <CellGrid>
        <Cell />
      </CellGrid>
    </TableCellGrid>
    <TableCellGrid
      key="check"
      selectionStyle="checkmark"
      headerCellGrid={(
        <HeaderCellGrid>
          <HeaderCell key="cell-0">Cell 0</HeaderCell>
          <HeaderCell key="cell-1">Cell 1</HeaderCell>
          <HeaderCell key="cell-2">Cell 2</HeaderCell>
        </HeaderCellGrid>
      )}
    >
      <CellGrid>
        <Cell />
      </CellGrid>
    </TableCellGrid>
    <TableCellGrid
      key="chevron"
      selectionStyle="chevron"
      headerCellGrid={(
        <HeaderCellGrid>
          <HeaderCell key="cell-0">Cell 0</HeaderCell>
          <HeaderCell key="cell-1">Cell 1</HeaderCell>
          <HeaderCell key="cell-2">Cell 2</HeaderCell>
        </HeaderCellGrid>
      )}
    >
      <CellGrid>
        <Cell />
      </CellGrid>
    </TableCellGrid>
  </React.Fragment>
);

export default HeaderCellGridTest;
