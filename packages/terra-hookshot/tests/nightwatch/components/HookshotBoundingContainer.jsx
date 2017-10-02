import React from 'react';
import HookshotTemplate from '../HookshotTemplate';

const HookshotBoundingContainer = () => (
  <div>
    <p>Content should be pushed left by bounding container</p>
    <HookshotTemplate
      isOpen={false}
      targetAttachment="middle right"
      contentAttachment="middle left"
      attchmentBehavior="none"
      buttonMarginLeft="300px"
      buttonMarginRight="140px"
      id="bounding-container-push-left"
    />
    <p>Content should be pushed right by bounding container</p>
    <HookshotTemplate
      isOpen={false}
      attchmentBehavior="none"
      buttonMarginLeft="50px"
      id="bounding-container-push-right"
    />
    <p>Content should be pushed down by bounding container</p>
    <HookshotTemplate
      isOpen={false}
      attchmentBehavior="none"
      buttonMarginTop="20px"
      id="bounding-container-push-down"
    />
    <p>Content should be pushed up by bounding container</p>
    <HookshotTemplate
      isOpen={false}
      attchmentBehavior="none"
      buttonMarginTop="100px"
      id="bounding-container-push-up"
    />
  </div>
);

export default HookshotBoundingContainer;
