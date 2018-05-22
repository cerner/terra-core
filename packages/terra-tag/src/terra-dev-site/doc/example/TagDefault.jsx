import React from 'react';
import IconTag from 'terra-icon/lib/icon/IconTag';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Tag from 'terra-tag/lib/Tag';

const TagDefault = () => (
  <div>
    {/* eslint-disable no-alert */}
    <Tag text="Default OnClick Tag" onClick={() => window.alert('Tag has been clicked!')} />
    <Tag icon={<IconTag />} onClick={() => window.alert('Tag has been clicked!')} text="Icon &amp; Text OnClick Tag" />
    {/* eslint-enable no-alert */}
  </div>
);

export default TagDefault;
