import React from 'react';
import DynamicGrid from 'terra-dynamic-grid/src/DynamicGrid';
import Region from 'terra-dynamic-grid/src/Region';

import Card from './Card';

const layouts = [{
  'grid-template-columns': '100px 100px',
  'grid-template-rows': 'auto',
  'grid-gap': '10px',
  regions: [
    {
      name: 'r1',
      'grid-column-start': 1,
      'grid-row-start': 1,
    },
    {
      name: 'r2',
      'grid-column-start': 2,
      'grid-row-start': 1,
    },
  ],
}];

const OneColumn = () => (
  (<DynamicGrid layouts={layouts}>
    <Region name="r1">
      <Card>Region 1</Card>
    </Region>
    <Region name="r2">
      <Card>Region 2</Card>
    </Region>
  </DynamicGrid>)
);

export default OneColumn;
