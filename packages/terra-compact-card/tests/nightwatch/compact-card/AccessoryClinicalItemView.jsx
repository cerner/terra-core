import React from 'react';

import ClincalItemView from '../../../lib/ClincalItemView';

const accessoryLeft = <img alt="Graphic Left" />;
const accessoryRight = <img alt="Graphic Right" />;

const views = () => (
  <div>
    <ClincalItemView leftAccessory={accessoryLeft} id="test-left-accessory" />
    <ClincalItemView rightAccessory={accessoryRight} id="test-right-accessory" />
    <ClincalItemView leftAccessory={accessoryLeft} rightAccessory={accessoryRight} accessoryAlignment="alignTop" id="test-both-accessory-top" />
  </div>
);

export default views;
