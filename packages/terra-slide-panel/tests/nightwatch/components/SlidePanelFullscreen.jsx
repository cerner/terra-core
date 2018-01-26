import React from 'react';
import SlidePanelMainContent from './SlidePanelMainContent';
import SlidePanelPanelContent from './SlidePanelPanelContent';
import SlidePanel from '../../../lib/SlidePanel';

const SlidePanelFullscreen = () => (
  <SlidePanel
    id="test-example"
    mainContent={<SlidePanelMainContent />}
    panelContent={<SlidePanelPanelContent />}
    isOpen
    isFullscreen
  />
);

export default SlidePanelFullscreen;
