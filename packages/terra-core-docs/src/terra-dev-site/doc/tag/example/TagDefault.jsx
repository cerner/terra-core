import React from 'react';
import IconTag from 'terra-icon/lib/icon/IconTag';
import Tag from 'terra-tag';
import TagList from 'terra-tag/src/subcomponent/TagList';

const TagDefault = () => (
  <div>
    <TagList>
      {/* eslint-disable no-alert */}
      <Tag text="Default OnClick Tag" onClick={() => window.alert('Tag1 has been clicked!')} id={"Tag1"} />
      <Tag icon={<IconTag />} onClick={() => window.alert('Tag2 has been clicked!')} text="Icon &amp; Text OnClick Tag" id={"Tag2"} />
      <Tag icon={<IconTag />} onClick={() => window.alert('Tag 3')} text="Icon &amp; Tag 3" id={"Tag3"} />
      <Tag icon={<IconTag />} onClick={() => window.alert('Tag 4')} text="Icon &amp; Tag 4" id={"Tag4"} />
      <Tag text="Tag 5" onClick={() => window.alert('Tag 5')} id={"Tag5"} />
      {/* eslint-enable no-alert */}
    </TagList>
  </div>
);

export default TagDefault;
