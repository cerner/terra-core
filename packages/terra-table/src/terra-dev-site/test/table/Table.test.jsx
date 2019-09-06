import React from 'react';
import Table, {
  Row, Cell, HeaderRow, HeaderCell,
} from '../../../index';

const TableTest = () => (
  <Table
    headerRow={(
      <HeaderRow>
        <HeaderCell>HeaderContent</HeaderCell>
      </HeaderRow>
    )}
  >
    <Row>
      <Cell>Cell Content</Cell>
    </Row>
  </Table>
);

export default TableTest;
