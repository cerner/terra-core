import React from 'react';
import IconBookmark from 'terra-icon/lib/icon/IconTile';
import Tag from 'terra-tag';

const Icon = <IconBookmark />;

const HrefTag = () => (
  <div>
    <Tag icon={Icon} href="http://google.com" text="Icon And Text HREF Tag" />
    <Tag href="http://google.com" text="HREF Tag" />
  </div>
);

export default HrefTag;
