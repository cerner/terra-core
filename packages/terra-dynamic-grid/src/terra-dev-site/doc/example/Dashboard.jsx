import React from 'react';
import DynamicGrid from 'terra-dynamic-grid';
import Card from './Card';

const template = {
  'grid-template-columns': '3fr 1fr 3fr',
  'grid-template-rows': 'auto auto auto auto',
};

const leftGutter = {
  'grid-column-start': 1,
  'grid-row-start': 1,
  'grid-row-end': 5,
};

const rightGutter = {
  'grid-column-start': 3,
  'grid-row-start': 1,
  'grid-row-end': 5,
};

const notification = {
  'grid-column-start': 2,
  'grid-column-end': 3,
  'grid-row-start': 1,
};

const region1 = {
  'grid-column-start': 2,
  'grid-row-start': 2,
  style: {
    padding: '0 5px 5px 5px',
  },
};

const region2 = {
  'grid-column-start': 2,
  'grid-row-start': 3,
  style: {
    padding: '5px',
  },
};

const region3 = {
  name: 'r3',
  'grid-column-start': 2,
  'grid-row-start': 4,
  style: {
    padding: '5px 5px 0',
  },
};


const DashboardLayout = () => (
  <DynamicGrid defaultTemplate={template}>
    <DynamicGrid.Region defaultPosition={leftGutter}>
      <Card>left gutter</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region defaultPosition={notification}>
      <Card>notification</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region defaultPosition={rightGutter}>
      <Card>right gutter</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region defaultPosition={region1}>
      <Card>r1</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region defaultPosition={region2}>
      <Card>r2</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region defaultPosition={region3}>
      <Card>r3</Card>
    </DynamicGrid.Region>
  </DynamicGrid>
);

export default DashboardLayout;
