import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DynamicGrid from 'terra-dynamic-grid/lib/DynamicGrid';

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
  (<DynamicGrid defaultTemplate={template}>
    <DynamicGrid.Region defaultPosition={region1}>
      <Card>Region 1</Card>
    </DynamicGrid.Region>
  </DynamicGrid>)
);

export default OneColumn;
