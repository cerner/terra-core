import React from 'react';
import SlidePanel from 'terra-slide-panel';
import SlidePanelMainContent from './SlidePanelMainContent';
import SlidePanelPanelContent from './SlidePanelPanelContent';

const SlidePanelStart = () => (
  <SlidePanel
    mainContent={<SlidePanelMainContent />}
    panelContent={<SlidePanelPanelContent />}
    panelBehavior="overlay"
    panelPosition="start"
    panelSize="small"
    isOpen
  />
);

export default SlidePanelStart;
