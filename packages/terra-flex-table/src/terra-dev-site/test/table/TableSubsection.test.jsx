import React from 'react';
import Table, { Row, Cell, Subsection } from '../../../index';

const TableSubsectionTest = () => (
  <Table>
    <Subsection colSpan={1} title="Default Subsection" key="default-subsection">
      <Row>
        <Cell>
          Cell Content
        </Cell>
      </Row>
    </Subsection>
    <Subsection colSpan={1} isCollapsible title="Collapsible Subsection" key="collapsible-subsection" id="test-header">
      <Row>
        <Cell>
          Cell Content
        </Cell>
      </Row>
    </Subsection>
    <Subsection colSpan={1} isCollapsed isCollapsible title="Collapsed Subsection" key="collapsed-subsection">
      <Row>
        <Cell>
          Cell Content
        </Cell>
      </Row>
    </Subsection>
  </Table>
);

export default TableSubsectionTest;
