import React from 'react';

import IconBookmark from '../../../terra-icon/lib/icon/IconTile';
import Tag from '../../lib/Tag';

const icon = <IconBookmark />;
const text = 'Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long';

const IconTag = () => <Tag icon={icon} text="Icon Tag" id="iconTag" />;
const LongTextIconTag = () => <div style={{ maxWidth: '500px' }}> <Tag icon={icon} text={text} id="longTextIcon" /> </div>;

export {
  IconTag,
  LongTextIconTag,
};
