import React from 'react';
import IconTag from 'terra-icon/lib/icon/IconTag';
import Tag from 'terra-tag';
import TagList from 'terra-tag/src/subcomponent/TagList';

const TagFallbacks = () => (
  <div>
    <TagList>
      <Tag text="No OnClick/HREF Tag" id={"Tag1"}/>
      <Tag icon={<IconTag />} text="Icon &amp; Text - No OnClick/HREF Tag" id={"Tag2"}/>
    </TagList>
  </div>
);

export default TagFallbacks;
