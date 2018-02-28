import React from 'react';
import IconBookmark from 'terra-icon/lib/icon/IconTile';
import Tag from 'terra-tag';

const Icon = <IconBookmark />;

const TagIconAndText = () => (
  <div>
    <Tag icon={Icon} onClick={() => 1} text="Icon And Text Tag" />
  </div>
);

export default TagIconAndText;
