import React from 'react';
import DynamicGrid from 'terra-dynamic-grid';

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

const TwoColumn = () => (
  (<DynamicGrid layouts={layouts}>
    <DynamicGrid.Region name="r1">
      <Card>Region 1</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region name="r2">
      <Card>Region 2</Card>
    </DynamicGrid.Region>
  </DynamicGrid>)
);

export default TwoColumn;
