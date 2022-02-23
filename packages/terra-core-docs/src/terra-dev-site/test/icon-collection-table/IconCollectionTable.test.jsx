import React from 'react';

import IconCollectionTable from '../../../../../terra-docs/src/IconCollectionTable';
import iconData from './iconData';

const IconCollectionTableTest = () => (
  <div id="site">
    <IconCollectionTable
      rows={iconData}
    />
  </div>
);

export default IconCollectionTableTest;
