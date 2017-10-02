import React from 'react';
import HookshotTemplate from '../HookshotTemplate';

const HookshotAttachmentBehavior = () => (
  <div>
    <p>Hookshot with no attachment behavior</p>
    <p>Should display in primary position on middle right.</p>
    <HookshotTemplate
      attachmentBehavior="none"
      id="attachment-behavior-none-primary"
      isOpen={false}
    />
    <p>Hookshot with no attachment behavior</p>
    <p>Should dipslay with position should be pushed by bounds.</p>
    <HookshotTemplate
      attachmentBehavior="none"
      id="attachment-behavior-none-pushed"
      buttonMarginLeft="50px"
      isOpen={false}
    />
    <p>Hookshot with flip attachment behavior</p>
    <p>Should display in primary position on middle right.</p>
    <HookshotTemplate
      attachmentBehavior="flip"
      id="attachment-behavior-flip-primary"
      isOpen={false}
    />
    <p>Hookshot with flip attachment behavior</p>
    <p>Should display in flipped position on middle left.</p>
    <HookshotTemplate
      attachmentBehavior="flip"
      id="attachment-behavior-flip-flipped"
      buttonMarginLeft="50px"
      isOpen={false}
    />
    <p>Hookshot with flip attachment behavior</p>
    <p>Should diplay with position pushed by bounding container.</p>
    <HookshotTemplate
      attachmentBehavior="flip"
      id="attachment-behavior-flip-pushed"
      boundingWidth="220px"
      buttonMarginLeft="60px"
      isOpen={false}
    />
    <p>Hookshot with auto attachment behavior</p>
    <p>Should display in primary position on middle right.</p>
    <HookshotTemplate
      attachmentBehavior="auto"
      id="attachment-behavior-auto-primary"
      isOpen={false}
    />
    <p>Hookshot with auto attachment behavior</p>
    <p>Should display in flipped position on middle left.</p>
    <HookshotTemplate
      attachmentBehavior="auto"
      id="attachment-behavior-auto-flipped"
      buttonMarginLeft="50px"
      isOpen={false}
    />
    <p>Hookshot with auto attachment behavior</p>
    <p>Should display in the rotated position of bottom center.</p>
    <HookshotTemplate
      attachmentBehavior="auto"
      id="attachment-behavior-auto-90"
      boundingWidth="220px"
      buttonMarginLeft="60px"
      isOpen={false}
    />
    <p>Hookshot with auto attachment behavior</p>
    <p>Should display in the rotated position of top center.</p>
    <HookshotTemplate
      attachmentBehavior="auto"
      id="attachment-behavior-auto-neg-90"
      boundingWidth="220px"
      buttonMarginTop="100px"
      buttonMarginLeft="60px"
      isOpen={false}
    />
    <p>Hookshot with auto attachment behavior</p>
    <p>Should be pushed by bounds.</p>
    <HookshotTemplate
      attachmentBehavior="auto"
      id="attachment-behavior-auto-pushed"
      boundingWidth="220px"
      buttonMarginTop="100px"
      buttonMarginLeft="110px"
      isOpen={false}
    />
  </div>
);

export default HookshotAttachmentBehavior;
