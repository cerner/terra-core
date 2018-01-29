import React from 'react';
import SlidePanelMainContent from './SlidePanelMainContent';
import SlidePanelPanelContent from './SlidePanelPanelContent';
import SlidePanel from '../../../lib/SlidePanel';

const SlidePanelSmall = () => (
  <SlidePanel
    mainContent={<SlidePanelMainContent />}
    panelContent={<SlidePanelPanelContent />}
    panelSize="small"
    isOpen
  />
);

export default SlidePanelSmall;
