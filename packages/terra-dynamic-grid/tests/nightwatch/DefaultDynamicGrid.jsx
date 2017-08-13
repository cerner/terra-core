import React from 'react';

import DynamicGrid from '../../lib/DynamicGrid';

const layouts = [{
  'grid-template-columns': '100px 100px',
  'grid-template-rows': '100px',
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

export default () => <DynamicGrid id="defaultDynamicGrid" layouts={layouts}>
  <DynamicGrid.Region id="region1" name="r1">R1</DynamicGrid.Region>
  <DynamicGrid.Region id="region2" name="r2">R2</DynamicGrid.Region>
</DynamicGrid>;
