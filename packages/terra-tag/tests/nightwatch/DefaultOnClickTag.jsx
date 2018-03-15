/* eslint-disable no-alert */
import React from 'react';

import Tag from '../../lib/Tag';

const spacingStyle = { padding: '10px' };
const DefaultOnClickTag = () => (
  <div style={spacingStyle}>
    <Tag
      id="default-on-click"
      text="Default OnClick Tag"
      onClick={() => window.alert('Tag has been clicked!')}
    />
  </div>
);

export default DefaultOnClickTag;
