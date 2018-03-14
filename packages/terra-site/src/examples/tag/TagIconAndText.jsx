import React from 'react';
import IconBookmark from 'terra-icon/lib/icon/IconTile';
import Tag from 'terra-tag';

const Icon = <IconBookmark />;

const TagIconAndText = () => (
  <div>
    <Tag icon={Icon} text="Icon And Text Tag" />
    <Tag icon={Icon} onClick={() => window.alert('Tag has been clicked!')} text="Icon And Text Tag onClick" />
  </div>
);

export default TagIconAndText;
