import React from 'react';

import ClinicalItemView from '../../../lib/ClinicalItemView';

const accessoryStart = <img alt="Graphic Start" />;
const accessoryEnd = <img alt="Graphic End" />;

const views = () => (
  <div>
    <ClinicalItemView startAccessory={accessoryStart} id="test-start-accessory" />
    <ClinicalItemView endAccessory={accessoryEnd} id="test-end-accessory" />
    <ClinicalItemView startAccessory={accessoryStart} endAccessory={accessoryEnd} accessoryAlignment="alignTop" id="test-both-accessory-top" />
  </div>
);

export default views;
