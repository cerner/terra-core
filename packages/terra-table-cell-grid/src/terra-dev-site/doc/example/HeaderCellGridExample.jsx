import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import TableCellGrid, { HeaderCellGrid, HeaderCell } from 'terra-table-cell-grid';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const CellGridExample = () => (
  <React.Fragment>
    <TableCellGrid
      paddingStyle="standard"
    >
      <HeaderCellGrid key="default">
        <HeaderCell isPadded key="key-0">Default Header</HeaderCell>
        <HeaderCell isPadded key="key-1">Default Header</HeaderCell>
      </HeaderCellGrid>
    </TableCellGrid>
    <TableCellGrid
      paddingStyle="standard"
    >
      <HeaderCellGrid selectionStyle="chevron" key="selection-chevron">
        <HeaderCell isPadded key="key-0">Selection Style Chevron</HeaderCell>
        <HeaderCell isPadded key="key-1">Selection Style Chevron</HeaderCell>
      </HeaderCellGrid>
    </TableCellGrid>
    <TableCellGrid
      paddingStyle="standard"
    >
      <HeaderCellGrid selectionStyle="checkmark" key="selection-checkmark">
        <HeaderCell isPadded key="key-0">Selection Style Checkmark</HeaderCell>
        <HeaderCell isPadded key="key-1">Selection Style Checkmark</HeaderCell>
      </HeaderCellGrid>
    </TableCellGrid>
  </React.Fragment>
);

export default CellGridExample;
