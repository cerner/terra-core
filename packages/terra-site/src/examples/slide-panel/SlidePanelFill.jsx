import React from 'react';
import SlidePanel from 'terra-slide-panel';
import SlidePanelMainContent from './SlidePanelMainContent';
import SlidePanelPanelContent from './SlidePanelPanelContent';

const SlidePanelFill = () => (
  <div style={{ height: '200px', overflow: 'auto' }}>
    <SlidePanel
      mainContent={<SlidePanelMainContent />}
      panelContent={<SlidePanelPanelContent />}
      panelBehavior="squish"
      panelPosition="end"
      panelSize="small"
      isOpen
      fill
    />
  </div>
);

export default SlidePanelFill;
