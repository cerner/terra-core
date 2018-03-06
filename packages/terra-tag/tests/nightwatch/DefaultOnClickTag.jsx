import React from 'react';

import Tag from '../../lib/Tag';

const DefaultOnClickTag = () => <Tag id="default-on-click" text="Default OnClick Tag" onClick={() => window.alert('Tag has been clicked!')} />;

export default DefaultOnClickTag;
