import React from 'react';
import Table, {
  Row, Cell,
} from '../../../index';

const CellTest = () => (
  <Table>
    <Row>
      <Cell key="cell-0">Default Cell</Cell>
      <Cell key="cell-1" width={{ scalar: 2 }}>Scalar 2</Cell>
      <Cell key="cell-2" width={{ scalar: 3 }}>Scalar 3</Cell>
      <Cell key="cell-3" width={{ static: { value: 50, unit: 'px' } }}>Static Cell</Cell>
      <Cell key="cell-4" width={{ percentage: 20 }}>20% Cell</Cell>
    </Row>
  </Table>
);

export default CellTest;
