/* eslint-disable no-alert */
import React from 'react';
import IconBookmark from '../../../terra-icon/lib/icon/IconTile';
import Tag from '../../lib/Tag';

const icon = <IconBookmark />;
const text = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ';

const IconTag = () => <Tag icon={icon} text="Icon Tag" id="iconTag" />;
const LongTextIconTag = () => <Tag icon={icon} text={text} id="longTextIcon" onClick={() => window.alert('Tag has been clicked!')} />;
const DefaultTag = () => <Tag id="default" text="Default Tag" />;
const OnClickTag = () => <Tag id="on-click" text="Clickable Tag" onClick={() => window.alert('Tag has been clicked!')} />;

const MultipleTags = () =>
  <div>
    <IconTag />
    <DefaultTag />
    <OnClickTag />
    <LongTextIconTag />
  </div>;

export default MultipleTags;
