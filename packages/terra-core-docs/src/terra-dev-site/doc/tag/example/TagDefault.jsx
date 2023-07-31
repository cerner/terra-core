import React from 'react';
import IconTag from 'terra-icon/lib/icon/IconTag';
import Tag from 'terra-tag';

const TagDefault = () => (
  <div>
    {/* eslint-disable no-alert */}
    <Tag text="Default OnClick Tag" onClick={() => window.alert('Tag has been clicked!')} />
    <Tag icon={<IconTag />} onClick={() => window.alert('Tag has been clicked!')} text="Icon &amp; Text OnClick Tag" />
    {/* eslint-enable no-alert */}
  </div>
);

export default TagDefault;
