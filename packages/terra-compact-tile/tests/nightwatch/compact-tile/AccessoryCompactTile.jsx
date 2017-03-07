import React from 'react';

import CompactTile from '../../../lib/CompactTile';

const accessoryLeft = <img alt="Graphic Left" />;
const accessoryRight = <img alt="Graphic Right" />;


const LeftAccessoryCompactTile = () => <CompactTile leftAccessory={accessoryLeft} />;
const RightAccessoryCompactTile = () => <CompactTile rightAccessory={accessoryRight} />;
const TopAlignmentCompactTile = () => <CompactTile leftAccessory={accessoryLeft} rightAccessory={accessoryRight} accessoryAlignment="alignTop" />;

export {
  LeftAccessoryCompactTile,
  RightAccessoryCompactTile,
  TopAlignmentCompactTile,
};
