import React from 'react';

import CompactCard from '../../../lib/CompactCard';

const accessoryLeft = <img alt="Graphic Left" />;
const accessoryRight = <img alt="Graphic Right" />;

const cards = () => (
  <div>
    <CompactCard leftAccessory={accessoryLeft} id="test-left-accessory" />
    <CompactCard rightAccessory={accessoryRight} id="test-right-accessory" />
    <CompactCard leftAccessory={accessoryLeft} rightAccessory={accessoryRight} accessoryAlignment="alignTop" id="test-both-accessory-top" />
  </div>
);

export default cards;
