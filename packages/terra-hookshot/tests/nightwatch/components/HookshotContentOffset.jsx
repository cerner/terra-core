import React from 'react';
import HookshotTemplate from '../HookshotTestTemplate';

const ContentOffset = () => (
  <HookshotTemplate
    id="ContentOffset"
    contentAttachment="bottom right"
    targetAttachment="top left"
    targetOffset="20px -10px"
    isOpen
  />
);

const HookshotExample = () => (
  <div>
    <ContentOffset />
    <p>Content Offset Applied. (Offset value is &quot;top-offset left-offset&quot;)</p>
    <ul>
      <li>Content Attachement: top right</li>
      <li>Target Attachement: bottom left</li>
      <li>Content Offset : 20px -10px</li>
    </ul>
  </div>
);

export default HookshotExample;
