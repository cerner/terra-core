import React from 'react';
import DynamicGrid from '../../lib/DynamicGrid';

const template = {
  'grid-template-columns': '100px 100px',
  'grid-template-rows': '100px',
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

export default () => <DynamicGrid id="defaultDynamicGrid" large={template}>
  <DynamicGrid.Region id="region1" large={region1}>R1</DynamicGrid.Region>
  <DynamicGrid.Region id="region2" large={region2}>R2</DynamicGrid.Region>
</DynamicGrid>;
