import React from 'react';
import IconTag from 'terra-icon/lib/icon/IconTag';
import Tag from 'terra-tag';

const TagIcon = () => (
  <div>
    {/* eslint-disable no-alert */}
    <Tag icon={<IconTag />} onClick={() => window.alert('Tag has been clicked!')} text="Icon &amp; Text OnClick Tag" />
    {/* eslint-enable no-alert */}
  </div>
);

export default TagIcon;
