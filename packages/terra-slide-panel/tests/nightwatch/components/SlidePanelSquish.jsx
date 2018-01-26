import React from 'react';
import SlidePanelMainContent from './SlidePanelMainContent';
import SlidePanelPanelContent from './SlidePanelPanelContent';
import SlidePanel from '../../../lib/SlidePanel';

const SlidePanelSquish = () => (
  <SlidePanel
    id="test-example"
    mainContent={<SlidePanelMainContent />}
    panelContent={<SlidePanelPanelContent />}
    panelBehavior="squish"
    isOpen
  />
);

export default SlidePanelSquish;
