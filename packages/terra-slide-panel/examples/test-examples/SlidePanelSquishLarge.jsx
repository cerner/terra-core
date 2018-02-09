import React from 'react';
import SlidePanel from '../../lib/SlidePanel';

const SlidePanelSquishLarge = () => (
  <div style={{ height: '100vh' }}>
    <SlidePanel
      mainContent={<div style={{ height: '100%', width: '100%', backgroundColor: 'red' }} />}
      panelContent={<div style={{ height: '100%', width: '100%', backgroundColor: 'blue' }} />}
      panelBehavior="squish"
      panelSize="large"
      isOpen
      fill
    />
  </div>
);

export default SlidePanelSquishLarge;
