import React from 'react';
import SlidePanelMainContent from './SlidePanelMainContent';
import SlidePanelPanelContent from './SlidePanelPanelContent';
import SlidePanel from '../src/SlidePanel';

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
