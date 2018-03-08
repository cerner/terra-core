import React from 'react';
import Tag from 'terra-tag';

const TagDefault = () => (
  <div>
    <Tag text="DefaultTag" />
    <Tag text="OnClick DefaultTag" onClick={() => window.alert('Tag has been clicked!')} />
  </div>
);

export default TagDefault;
