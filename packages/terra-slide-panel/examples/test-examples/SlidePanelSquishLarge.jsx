import React from 'react';
import SlidePanel from '../../lib/SlidePanel';

const SlidePanelSquishLarge = () => (
  <SlidePanel
    mainContent={<div style={{ height: '100%', width: '100%', backgroundColor: 'red' }} />}
    panelContent={<div style={{ height: '100%', width: '100%', backgroundColor: 'blue' }} />}
    panelBehavior="squish"
    panelSize="large"
    isOpen
    fill
  />
);

export default SlidePanelSquishLarge;
