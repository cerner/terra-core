import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Row, Cell, Subsection } from 'terra-table-cell-grid/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableSubsectionExample = () => (
  <Table
    paddingStyle="standard"
  >
    <Subsection title="Subsection Title">
      <Row>
        <Cell isPadded key="cell-0">
          Lorem ipsum dolor
        </Cell>
        <Cell isPadded key="cell-1">
          Lorem ipsum dolor
        </Cell>
        <Cell isPadded key="cell-2">
          Lorem ipsum dolor
        </Cell>
      </Row>
    </Subsection>
    <Subsection isCollapsible title="Collapsible Subsection">
      <Row>
        <Cell isPadded key="cell-0">
          Lorem ipsum dolor
        </Cell>
        <Cell isPadded key="cell-1">
          Lorem ipsum dolor
        </Cell>
        <Cell isPadded key="cell-2">
          Lorem ipsum dolor
        </Cell>
      </Row>
    </Subsection>
    <Subsection isCollapsible isCollapsed title="Collapsed Subsection">
      <Row>
        <Cell isPadded key="cell-0">
          Lorem ipsum dolor
        </Cell>
        <Cell isPadded key="cell-1">
          Lorem ipsum dolor
        </Cell>
        <Cell isPadded key="cell-2">
          Lorem ipsum dolor
        </Cell>
      </Row>
    </Subsection>
  </Table>
);

export default TableSubsectionExample;
