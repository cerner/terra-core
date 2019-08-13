import React from 'react';
import TableCellGrid, { CellGrid, Cell, Section } from '../../../index';

const TableSectionTest = () => (
  <TableCellGrid>
    <Section title="Default Section" key="default-section">
      <CellGrid>
        <Cell>
          Cell Content
        </Cell>
      </CellGrid>
    </Section>
    <Section isCollapsible title="Collapsible Section" key="collapsible-section" id="test-header">
      <CellGrid>
        <Cell>
          Cell Content
        </Cell>
      </CellGrid>
    </Section>
    <Section isCollapsed isCollapsible title="Collapsed Section" key="collapsed-section">
      <CellGrid>
        <Cell>
          Cell Content
        </Cell>
      </CellGrid>
    </Section>
  </TableCellGrid>
);

export default TableSectionTest;
