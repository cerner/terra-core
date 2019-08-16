import React from 'react';
import DynamicGrid from 'terra-dynamic-grid';
import Card from './Card';

const template = {
  'grid-template-columns': '1fr',
  'grid-template-rows': 'auto',
};

const region1 = {
  'grid-column-start': 1,
  'grid-column-end': 1,
  'grid-row-start': 1,
  'grid-row-end': 1,
};

const OneColumn = () => (
  <DynamicGrid defaultTemplate={template}>
    <DynamicGrid.Region defaultPosition={region1}>
      <Card>Region 1</Card>
    </DynamicGrid.Region>
  </DynamicGrid>
);

export default OneColumn;
