import React from 'react';
import IconTag from 'terra-icon/lib/icon/IconTag';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Tag from 'terra-tag/lib/Tag';

const HrefTag = () => (
  <div>
    <Tag href="http://google.com" text="HREF Tag" />
    <Tag icon={<IconTag />} href="http://google.com" text="Icon &amp; Text HREF Tag" />
  </div>
);

export default HrefTag;
