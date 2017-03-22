import React from 'react';
import SlidePanelMainContent from './SlidePanelMainContent';
import SlidePanelPanelContent from './SlidePanelPanelContent';
import SlidePanel from 'terra-slide-panel';

const SlidePanelFullscreen = () => (
  <SlidePanel
    mainContent={<SlidePanelMainContent />}
    panelContent={<SlidePanelPanelContent />}
    panelBehavior="overlay"
    panelPosition="end"
    panelSize="small"
    isOpen
    isFullscreen
  />
);

export default SlidePanelFullscreen;
