import React from 'react';
import Tag from 'terra-tag';

const TagDefault = () => (
  <div>
    {/* eslint-disable no-alert */}
    <Tag text="Default OnClick Tag" onClick={() => window.alert('Tag has been clicked!')} />
    {/* eslint-enable no-alert */}
  </div>
);

export default TagDefault;
