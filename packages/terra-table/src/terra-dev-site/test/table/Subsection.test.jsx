import React from 'react';
import Table, { Row, Cell, Subsection } from '../../../index';

const SubsectionTest = () => (
  <Table>
    <Subsection title="Default Subsection" key="default-subsection">
      <Row>
        <Cell>
          Cell Content
        </Cell>
      </Row>
    </Subsection>
    <Subsection isCollapsible title="Collapsible Subsection" key="collapsible-subsection" id="test-header">
      <Row>
        <Cell>
          Cell Content
        </Cell>
      </Row>
    </Subsection>
    <Subsection isCollapsed isCollapsible title="Collapsed Subsection" key="collapsed-subsection">
      <Row>
        <Cell>
          Cell Content
        </Cell>
      </Row>
    </Subsection>
  </Table>
);

export default SubsectionTest;
