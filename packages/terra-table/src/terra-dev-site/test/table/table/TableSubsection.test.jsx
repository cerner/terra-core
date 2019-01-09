import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Row, Cell, Subsection } from 'terra-table/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableSubsectionTest = () => (
  <Table>
    <Subsection title="Default Subsection" key="default-subsection">
      <Row>
        <Cell>
          Cell Content
        </Cell>
      </Row>
    </Subsection>
    <Subsection title="Collapsible Subsection" key="collapsible-subsection" id="test-header">
      <Row>
        <Cell>
          Cell Content
        </Cell>
      </Row>
    </Subsection>
    <Subsection title="Collapsed Subsection" key="collapsed-subsection">
      <Row>
        <Cell>
          Cell Content
        </Cell>
      </Row>
    </Subsection>
  </Table>
);

export default TableSubsectionTest;
