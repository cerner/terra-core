import React from 'react';
import SlidePanel from 'terra-slide-panel';
import SlidePanelMainContent from './SlidePanelMainContent';
import SlidePanelPanelContent from './SlidePanelPanelContent';

const SlidePanelSquish = () => (
  <SlidePanel
    mainContent={<SlidePanelMainContent />}
    panelContent={<SlidePanelPanelContent />}
    panelBehavior="squish"
    panelPosition="end"
    panelSize="small"
    isOpen
  />
);

export default SlidePanelSquish;
