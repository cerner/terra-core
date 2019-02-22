import React from 'react';
import IconTag from 'terra-icon/lib/icon/IconTag';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Tag from 'terra-tag/lib/Tag';

const TagFallbacks = () => (
  <div>
    <Tag text="No OnClick/HREF Tag" />
    <Tag icon={<IconTag />} text="Icon &amp; Text - No OnClick/HREF Tag" />
  </div>
);

export default TagFallbacks;
