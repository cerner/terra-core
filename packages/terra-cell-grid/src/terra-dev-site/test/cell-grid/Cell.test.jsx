import React from 'react';
import {
  Cell,
} from '../../../index';

const CellTest = () => (
  <React.Fragment>
    <Cell key="cell-0">Default Cell</Cell>
    <Cell key="cell-1" width={{ scalar: 2 }}>Scalar 2</Cell>
    <Cell key="cell-2" width={{ scalar: 3 }}>Scalar 3</Cell>
    <Cell key="cell-3" width={{ static: { value: 50, unit: 'px' } }}>Static Cell</Cell>
    <Cell key="cell-4" width={{ percentage: 20 }}>20% Cell</Cell>
  </React.Fragment>
);

export default CellTest;
