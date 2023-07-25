import React from 'react';
import IconTag from 'terra-icon/lib/icon/IconTag';
import Tag from 'terra-tag';
import TagList from 'terra-tag/src/subcomponent/TagList';

const HrefTag = () => (
  <div>
    <TagList>
      <Tag href="http://google.com" text="HREF Tag" id={"Tag1"}/>
      <Tag icon={<IconTag />} href="http://google.com" text="Icon &amp; Text HREF Tag" id={"Tag2"}/>
    </TagList>
  </div>
);

export default HrefTag;
