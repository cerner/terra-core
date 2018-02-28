import React from 'react';
import IconBookmark from '../../../terra-icon/lib/icon/IconTile';
import Tag from '../../lib/Tag';

const icon = <IconBookmark />;
const text = 'Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long';

const IconTag = () => <Tag icon={icon} text="Icon Tag" id="iconTag" />;
const LongTextIconTag = () => <Tag icon={icon} text={text} id="longTextIcon" />;
const DefaultTag = () => <Tag id="default" text="Default Tag" />;

const MultipleTags = () =>
  <div>
    <IconTag />
    <DefaultTag />
    <LongTextIconTag />
  </div>;

export default MultipleTags;
