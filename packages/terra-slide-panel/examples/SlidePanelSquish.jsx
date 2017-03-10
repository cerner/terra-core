import React from 'react';
import SlidePanelMainContent from './SlidePanelMainContent';
import SlidePanelPanelContent from './SlidePanelPanelContent';
import SlidePanel from '../src/SlidePanel';

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
