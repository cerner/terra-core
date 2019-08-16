import React from 'react';
import IconTag from 'terra-icon/lib/icon/IconTag';
import Tag from 'terra-tag';

const TagFallbacks = () => (
  <div>
    <Tag text="No OnClick/HREF Tag" />
    <Tag icon={<IconTag />} text="Icon &amp; Text - No OnClick/HREF Tag" />
  </div>
);

export default TagFallbacks;
