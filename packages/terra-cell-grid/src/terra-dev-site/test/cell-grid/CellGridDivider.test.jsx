import React from 'react';
import CellGrid, { Cell } from '../../../index';

const CellGridDividerTest = () => (
  <div>
    <CellGrid dividerStyle="vertical">
      <Cell key="cell-0">Vertical 1</Cell>
      <Cell key="cell-1">Vertical 2</Cell>
      <Cell key="cell-2">Vertical 3</Cell>
    </CellGrid>
    <CellGrid dividerStyle="horizontal">
      <Cell key="cell-0">Horizontal 1</Cell>
      <Cell key="cell-1">Horizontal 2</Cell>
      <Cell key="cell-2">Horizontal 3</Cell>
    </CellGrid>
    <CellGrid dividerStyle="both">
      <Cell key="cell-0">Both 1</Cell>
      <Cell key="cell-1">Both 2</Cell>
      <Cell key="cell-2">Both 3</Cell>
    </CellGrid>
  </div>
);

export default CellGridDividerTest;
