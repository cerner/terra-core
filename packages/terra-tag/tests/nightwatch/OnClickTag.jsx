import React from 'react';

import Tag from '../../lib/Tag';

const OnClickTag = () => <Tag id="on-click" text="Clickable Tag" onClick={() => window.alert('Tag has been clicked!')} />;

export default OnClickTag;
