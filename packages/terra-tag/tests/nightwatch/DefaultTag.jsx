import React from 'react';

import Tag from '../../lib/Tag';

const spacingStyle = { padding: '10px' };
const DefaultTag = () => (
  <div style={spacingStyle}>
    <Tag
      id="default"
      text="Default Tag"
    />
  </div>
);
export default DefaultTag;
