import React from 'react';
import Table, {
  Row, Cell,
} from '../../../index';

const PaddingTest = () => (
  <React.Fragment>
    <Table
      paddingStyle="standard"
      key="table-1"
    >
      <Row>
        <Cell>Cell Standard</Cell>
      </Row>
    </Table>
    <Table
      paddingStyle="compact"
      key="table-2"
    >
      <Row>
        <Cell>Cell Compact</Cell>
      </Row>
    </Table>
  </React.Fragment>
);

export default PaddingTest;
