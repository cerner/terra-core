import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import TableCellGrid, { CellGrid, Cell } from 'terra-table-cell-grid';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableCellExample = () => (
  <TableCellGrid>
    <CellGrid>
      <Cell>
        Lorem ipsum dolor
      </Cell>
    </CellGrid>
  </TableCellGrid>
);

export default TableCellExample;
