import React from 'react';
import CellGrid, {
  Cell,
} from 'terra-cell-grid';

const CellGridHorizontal = () => (
  <CellGrid
    dividerStyle="horizontal"
  >
    <Cell key="cell-0" width={{ static: { value: 80, unit: 'px' } }}>80px</Cell>
    <Cell key="cell-1" width={{ percentage: 10 }}>10%</Cell>
    <Cell key="cell-2">Scalar 1</Cell>
    <Cell key="cell-3" width={{ scalar: 3 }}>Scalar 3</Cell>
  </CellGrid>
);

export default CellGridHorizontal;
