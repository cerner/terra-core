import React from 'react';

import IconBookmark from '../../../terra-icon/lib/icon/IconTile';
import Tag from '../../lib/Tag';

const icon = <IconBookmark />;
const text = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ';

const LongTextIconTag = () => <div style={{ maxWidth: '500px' }}> <Tag icon={icon} text={text} id="longTextIcon" onClick={() => window.alert('Tag has been clicked!')} /> </div>;

export default LongTextIconTag;
