import React from 'react';
import DynamicGrid from 'terra-dynamic-grid';

import Card from './Card';

const layouts = [{
  'grid-template-columns': '300px 1fr 300px',
  'grid-template-rows': 'auto auto auto auto',
  regions: [
    {
      name: 'leftGutter',
      'grid-column-start': 1,
      'grid-row-start': 1,
      'grid-row-end': 5,
    },
    {
      name: 'notification',
      'grid-column-start': 2,
      'grid-column-end': 3,
      'grid-row-start': 1,
    },
    {
      name: 'rightGutter',
      'grid-column-start': 3,
      'grid-row-start': 1,
      'grid-row-end': 5,
    },
    {
      name: 'r1',
      'grid-column-start': 2,
      'grid-row-start': 2,
      style: {
        padding: '0 5px 5px 5px',
      },
    },
    {
      name: 'r2',
      'grid-column-start': 2,
      'grid-row-start': 3,
      style: {
        padding: '5px',
      },
    },
    {
      name: 'r3',
      'grid-column-start': 2,
      'grid-row-start': 4,
      style: {
        padding: '5px 5px 0',
      },
    },
  ],
},
];

const DashboardLayout = () => (
  (<DynamicGrid layouts={layouts}>
    <DynamicGrid.Region name="leftGutter">
      <Card>left gutter</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region name="notification">
      <Card>notification</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region name="rightGutter">
      <Card>right gutter</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region name="r1">
      <Card>r1</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region name="r2">
      <Card>r2</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region name="r3">
      <Card>r3</Card>
    </DynamicGrid.Region>
  </DynamicGrid>)
);

export default DashboardLayout;
