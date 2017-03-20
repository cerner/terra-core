import React from 'react';
import SlidePanelMainContent from './SlidePanelMainContent';
import SlidePanelPanelContent from './SlidePanelPanelContent';
import SlidePanel from '../../../lib/SlidePanel';

const SlidePanelOpen = () => (
  <SlidePanel
    mainContent={<SlidePanelMainContent />}
    panelContent={<SlidePanelPanelContent />}
    isOpen
  />
);

export default SlidePanelOpen;
