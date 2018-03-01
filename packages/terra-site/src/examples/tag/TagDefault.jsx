import React from 'react';
import Tag from 'terra-tag';

const TagDefault = () => (
  <div>
    <Tag text="DefaultTag" />
    <Tag text="OnClick DefaultTag" onClick={() => 1} />
  </div>
);

export default TagDefault;
