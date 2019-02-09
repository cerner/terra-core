import React from 'react';
import Table, {
  Row, Cell,
} from '../../../index';

const PaddingTableTest = () => (
  <React.Fragment>
    <Table
      paddingStyle="standard"
      id="Table-Standard"
      key="table-1"
    >
      <Row key="ROW-0">
        <Cell>Cell Content</Cell>
      </Row>
      <Row key="ROW-1">
        <Cell>Cell Content</Cell>
      </Row>
      <Row key="ROW-2">
        <Cell>Cell Content</Cell>
      </Row>
    </Table>
    <Table
      paddingStyle="compact"
      id="Table-Compact"
      key="table-2"
    >
      <Row key="ROW-0">
        <Cell>Cell Content</Cell>
      </Row>
      <Row key="ROW-1">
        <Cell>Cell Content</Cell>
      </Row>
      <Row key="ROW-2">
        <Cell>Cell Content</Cell>
      </Row>
    </Table>
  </React.Fragment>
);

export default PaddingTableTest;
