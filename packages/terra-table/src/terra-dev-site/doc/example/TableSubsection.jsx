import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Row, Cell, Subsection } from 'terra-table/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableRowExample = () => (
  <Table>
    <Subsection title="Subsection Title">
      <Row>
        <Cell>
          <Placeholder style={{ height: '50px' }} />
        </Cell>
      </Row>
    </Subsection>
  </Table>
);

export default TableRowExample;
