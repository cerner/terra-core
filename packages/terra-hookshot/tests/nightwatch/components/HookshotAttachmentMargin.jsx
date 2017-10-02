import React from 'react';
import HookshotTemplate from '../HookshotTemplate';

const HookshotAttachmentMargin = () => (
  <div>
    <p>Attachment Margin - target attachment middle left</p>
    <HookshotTemplate
      isOpen={false}
      attachmentMargin={10}
      id="attachment-margin-middle-left"
    />
    <p>Attachment Margin - target attachment middle right</p>
    <HookshotTemplate
      contentAttachment="middle left"
      targetAttachment="middle right"
      isOpen={false}
      attachmentMargin={10}
      id="attachment-margin-middle-right"
    />
    <p>Attachment Margin - target attachment middle center</p>
    <HookshotTemplate
      contentAttachment="middle center"
      targetAttachment="middle center"
      isOpen={false}
      attachmentMargin={10}
      id="attachment-margin-middle-center"
    />
    <p>Attachment Margin - target attachment bottom left</p>
    <HookshotTemplate
      contentAttachment="top right"
      targetAttachment="bottom left"
      isOpen={false}
      attachmentMargin={10}
      id="attachment-margin-bottom-left"
    />
    <p>Attachment Margin - target attachment bottom right</p>
    <HookshotTemplate
      contentAttachment="top left"
      targetAttachment="bottom right"
      isOpen={false}
      attachmentMargin={10}
      id="attachment-margin-bottom-right"
    />
    <p>Attachment Margin - target attachment bottom center</p>
    <HookshotTemplate
      contentAttachment="top center"
      targetAttachment="bottom center"
      isOpen={false}
      attachmentMargin={10}
      id="attachment-margin-bottom-center"
    />
    <p>Attachment Margin - target attachment top left</p>
    <HookshotTemplate
      contentAttachment="bottom right"
      targetAttachment="top left"
      isOpen={false}
      attachmentMargin={10}
      id="attachment-margin-top-left"
    />
    <p>Attachment Margin - target attachment top right</p>
    <HookshotTemplate
      contentAttachment="bottom left"
      targetAttachment="top right"
      isOpen={false}
      attachmentMargin={10}
      id="attachment-margin-top-right"
    />
    <p>Attachment Margin - target attachment top center</p>
    <HookshotTemplate
      contentAttachment="bottom center"
      targetAttachment="top center"
      isOpen={false}
      attachmentMargin={10}
      id="attachment-margin-top-center"
    />
  </div>
);

export default HookshotAttachmentMargin;
