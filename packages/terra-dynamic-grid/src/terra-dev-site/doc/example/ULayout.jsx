import React from 'react';
import DynamicGrid from 'terra-dynamic-grid';
import Card from './Card';

const template = {
  'grid-template-columns': '1fr 1fr 1fr',
  'grid-template-rows': 'auto auto',
  'grid-gap': '10px',
};

const region1 = {
  'grid-column-start': 1,
  'grid-column-end': 4,
  'grid-row-start': 1,
};

const region2 = {
  'grid-column-start': 1,
  'grid-row-start': 2,
};

const region3 = {
  'grid-column-start': 3,
  'grid-row-start': 2,
};

const ULayout = () => (
  <DynamicGrid defaultTemplate={template}>
    <DynamicGrid.Region defaultPosition={region1}>
      <Card>Region 1</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region defaultPosition={region2}>
      <Card>Region 2</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region defaultPosition={region3}>
      <Card>Region 3</Card>
    </DynamicGrid.Region>
  </DynamicGrid>
);

export default ULayout;
