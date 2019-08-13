import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import TableCellGrid, { CellGrid, Cell, Section } from 'terra-table-cell-grid';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableSectionExample = () => (
  <TableCellGrid
    paddingStyle="standard"
  >
    <Section title="Default Section">
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
    </Section>
    <Section isCollapsible title="Collapsible Section">
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
    </Section>
    <Section isCollapsible isCollapsed title="Collapsed Section">
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
    </Section>
  </TableCellGrid>
);

export default TableSectionExample;
