import React from 'react';
import TableCellGrid, {
  HeaderCell, HeaderCellGrid, CellGrid, Cell,
} from '../../../index';

const HeaderFooterTest = () => (
  <TableCellGrid
    id="Table"
    paddingStyle="standard"
    headerCellGrid={(
      <HeaderCellGrid>
        <HeaderCell key="cell-0">Default Header Cell</HeaderCell>
      </HeaderCellGrid>
    )}
    headerNode={<p>Header Toolbar</p>}
    footerNode={<p>Footer Toolbar</p>}
  >
    <CellGrid>
      <Cell key="cell-0">Default Cell</Cell>
    </CellGrid>
  </TableCellGrid>
);

export default HeaderFooterTest;
