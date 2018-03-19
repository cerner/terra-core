import React from 'react';
import SlidePanelMainContent from './SlidePanelMainContent';
import SlidePanelPanelContent from './SlidePanelPanelContent';
import SlidePanel from '../../../lib/SlidePanel';

const SlidePanelFill = () => (
  <div style={{ height: '200px', overflow: 'auto' }}>
    <SlidePanel
      id="test-example"
      mainContent={<SlidePanelMainContent />}
      panelContent={<SlidePanelPanelContent />}
      isOpen
      fill
    />
  </div>
);

export default SlidePanelFill;
