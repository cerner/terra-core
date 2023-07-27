import React from 'react';
import IconTag from 'terra-icon/lib/icon/IconTag';
import Tag from 'terra-tag';

const HrefTag = () => (
  <div>
    <Tag href="http://google.com" text="HREF Tag" />
    <Tag icon={<IconTag />} href="http://google.com" text="Icon &amp; Text HREF Tag" />
  </div>
);

export default HrefTag;
