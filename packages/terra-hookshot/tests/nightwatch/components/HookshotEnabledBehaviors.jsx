import React from 'react';
import HookshotTemplate from '../HookshotTestTemplate';

const Enabled = () => (
  <HookshotTemplate
    id="Enabled"
    isOpen
    isEnabled
  />
);

const NotEnabled = () => (
  <HookshotTemplate
    id="NotEnabled"
    isOpen
    isEnabled={false}
  />
);

const HookshotExample = () => (
  <div>
    <p>Content Positioning is enabled. Content is visible.</p>
    <Enabled />
    <p>Content Positioning is not enabled. Content is not visible.</p>
    <NotEnabled />
  </div>
);

export default HookshotExample;
