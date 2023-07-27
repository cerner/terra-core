/* eslint-disable no-alert */
import React from 'react';
import IconBookmark from 'terra-icon/lib/icon/IconTile';
import IconTag from 'terra-icon/lib/icon/IconTag';
import Tag from 'terra-tag';
import TagList from 'terra-tag/src/TagList';

const icon = <IconBookmark />;
const text = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ';

const TagListExample = () => (
  <div>
    <TagList>
      <Tag icon={icon} text="Icon Tag" onClick={() => window.alert('Tag has been clicked!')} id="iconTag" />
      <Tag icon={icon} text={text} id="longTextIcon" onClick={() => window.alert('Tag has been clicked!')} />
      <Tag id="default" text="Default Tag" onClick={() => window.alert('Tag has been clicked!')} />
      <Tag id="on-click" text="Clickable Tag" onClick={() => window.alert('Tag has been clicked!')} />
    </TagList>
    <TagList>
      <Tag href="http://google.com" text="HREF Tag" id="Tag1" />
      <Tag icon={<IconTag />} href="http://google.com" text="Icon &amp; Text HREF Tag" id="Tag2" />
    </TagList>
  </div>
);

export default TagListExample;
