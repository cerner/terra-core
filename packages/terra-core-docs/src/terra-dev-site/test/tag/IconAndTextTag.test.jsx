import React from 'react';
import IconBookmark from 'terra-icon/lib/icon/IconTile';
import Tag from 'terra-tag';

const icon = <IconBookmark a11yLabel="Bookmark" />;

const IconTag = () => <Tag icon={icon} text="Icon Tag" id="iconTag" />;

export default IconTag;
