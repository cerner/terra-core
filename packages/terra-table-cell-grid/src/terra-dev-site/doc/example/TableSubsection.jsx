import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import TableCellGrid, { CellGrid, Cell, Subsection } from 'terra-table-cell-grid/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableSubsectionExample = () => (
  <TableCellGrid
    paddingStyle="standard"
  >
    <Subsection title="Subsection Title">
      <CellGrid>
        <Cell isPadded key="cell-0">
          Lorem ipsum dolor
        </Cell>
        <Cell isPadded key="cell-1">
          Lorem ipsum dolor
        </Cell>
        <Cell isPadded key="cell-2">
          Lorem ipsum dolor
        </Cell>
      </CellGrid>
    </Subsection>
    <Subsection isCollapsible title="Collapsible Subsection">
      <CellGrid>
        <Cell isPadded key="cell-0">
          Lorem ipsum dolor
        </Cell>
        <Cell isPadded key="cell-1">
          Lorem ipsum dolor
        </Cell>
        <Cell isPadded key="cell-2">
          Lorem ipsum dolor
        </Cell>
      </CellGrid>
    </Subsection>
    <Subsection isCollapsible isCollapsed title="Collapsed Subsection">
      <CellGrid>
        <Cell isPadded key="cell-0">
          Lorem ipsum dolor
        </Cell>
        <Cell isPadded key="cell-1">
          Lorem ipsum dolor
        </Cell>
        <Cell isPadded key="cell-2">
          Lorem ipsum dolor
        </Cell>
      </CellGrid>
    </Subsection>
  </TableCellGrid>
);

export default TableSubsectionExample;
