/* eslint-disable no-alert */
import React from 'react';

import Tag from '../../lib/Tag';

const spacingStyle = { padding: '10px' };
const OnClickTag = () => (
  <div style={spacingStyle}>
    <Tag
      id="on-click"
      text="Clickable Tag"
      onClick={() => window.alert('Tag has been clicked!')}
    />
  </div>
);

export default OnClickTag;
