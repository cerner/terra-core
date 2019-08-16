import React from 'react';
import DynamicGrid from 'terra-dynamic-grid';
import Card from './Card';

const template = {
  'grid-template-columns': '1fr 1fr',
  'grid-template-rows': 'auto',
  'grid-gap': '10px',
};

const region1 = {
  'grid-column-start': 1,
  'grid-row-start': 1,
};

const region2 = {
  'grid-column-start': 2,
  'grid-row-start': 1,
};

const TwoColumn = () => (
  <DynamicGrid defaultTemplate={template}>
    <DynamicGrid.Region defaultPosition={region1}>
      <Card>Region 1</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region defaultPosition={region2}>
      <Card>Region 2</Card>
    </DynamicGrid.Region>
  </DynamicGrid>
);

export default TwoColumn;
