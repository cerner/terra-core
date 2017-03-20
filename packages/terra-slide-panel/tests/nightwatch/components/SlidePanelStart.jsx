import React from 'react';
import SlidePanelMainContent from './SlidePanelMainContent';
import SlidePanelPanelContent from './SlidePanelPanelContent';
import SlidePanel from '../../../lib/SlidePanel';

const SlidePanelStart = () => (
  <SlidePanel
    mainContent={<SlidePanelMainContent />}
    panelContent={<SlidePanelPanelContent />}
    panelPosition="start"
    isOpen
  />
);

export default SlidePanelStart;
