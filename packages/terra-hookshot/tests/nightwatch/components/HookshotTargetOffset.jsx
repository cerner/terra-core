import React from 'react';
import HookshotTemplate from '../HookshotTestTemplate';

const TargetOffset = () => (
  <HookshotTemplate
    id="TargetOffset"
    contentAttachment="bottom left"
    targetAttachment="top left"
    targetOffset="-10px -20px"
    isOpen
  />
);

const HookshotExample = () => (
  <div>
    <TargetOffset />
    <p>Target Offset Applied. (Offset value is &quot;top-offset left-offset&quot;)</p>
    <ul>
      <li>Content Attachement: bottom left</li>
      <li>Target Attachement: top left</li>
      <li>Target Offset: -10px -20px</li>
    </ul>
  </div>
);

export default HookshotExample;
