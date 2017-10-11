import React from 'react';
import HookshotTemplate from '../HookshotTestTemplate';

const ContentOffset = () => (
  <HookshotTemplate
    id="ContentOffset"
    contentAttachment="bottom end"
    targetAttachment="top start"
    targetOffset={{ vertical: 20, horizontal: -10 }}
    isOpen
  />
);

const HookshotExample = () => (
  <div>
    <ContentOffset />
    <p>Content Offset Applied. (Offset value is &quot;top-offset left-offset&quot;)</p>
    <ul>
      <li>Content Attachement: top end</li>
      <li>Target Attachement: bottom start</li>
      <li>Content Offset : 20px -10px</li>
    </ul>
  </div>
);

export default HookshotExample;
