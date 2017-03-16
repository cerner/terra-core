import React from 'react';

import ClinicalItemView from '../../../lib/ClinicalItemView';

const accessoryLeft = <img alt="Graphic Left" />;
const accessoryRight = <img alt="Graphic Right" />;

const views = () => (
  <div>
    <ClinicalItemView leftAccessory={accessoryLeft} id="test-left-accessory" />
    <ClinicalItemView rightAccessory={accessoryRight} id="test-right-accessory" />
    <ClinicalItemView leftAccessory={accessoryLeft} rightAccessory={accessoryRight} accessoryAlignment="alignTop" id="test-both-accessory-top" />
  </div>
);

export default views;
