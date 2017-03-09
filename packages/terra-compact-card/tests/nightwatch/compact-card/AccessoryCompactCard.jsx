import React from 'react';

import CompactCard from '../../../lib/CompactCard';

const accessoryLeft = <img alt="Graphic Left" />;
const accessoryRight = <img alt="Graphic Right" />;


const LeftAccessoryCompactCard = () => <CompactCard leftAccessory={accessoryLeft} />;
const RightAccessoryCompactCard = () => <CompactCard rightAccessory={accessoryRight} />;
const TopAlignmentCompactCard = () => <CompactCard leftAccessory={accessoryLeft} rightAccessory={accessoryRight} accessoryAlignment="alignTop" />;

export {
  LeftAccessoryCompactCard,
  RightAccessoryCompactCard,
  TopAlignmentCompactCard,
};
