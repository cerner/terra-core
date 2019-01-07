import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Row, Cell } from 'terra-table/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const DefaultTableCell = () => (
  <Table>
    <Row>
      <Cell>
        <Placeholder title="Cell Content" style={{ height: '50px' }} />
      </Cell>
    </Row>
  </Table>
);

export default DefaultTableCell;
