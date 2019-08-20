import React from 'react';
import TableCellGrid, { CellGrid, Cell, Subsection } from '../../../index';

const SubsectionTest = () => (
  <TableCellGrid>
    <Subsection title="Default Subsection" key="default-subsection">
      <CellGrid>
        <Cell>
          Cell Content
        </Cell>
      </CellGrid>
    </Subsection>
    <Subsection isCollapsible title="Collapsible Subsection" key="collapsible-subsection" id="test-header">
      <CellGrid>
        <Cell>
          Cell Content
        </Cell>
      </CellGrid>
    </Subsection>
    <Subsection isCollapsed isCollapsible title="Collapsed Subsection" key="collapsed-subsection">
      <CellGrid>
        <Cell>
          Cell Content
        </Cell>
      </CellGrid>
    </Subsection>
  </TableCellGrid>
);

export default SubsectionTest;
