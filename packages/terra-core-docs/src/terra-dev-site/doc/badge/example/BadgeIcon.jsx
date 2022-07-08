import React from 'react';
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';
import Badge from 'terra-badge';

const Icon = <IconBookmark a11yLabel="Bookmark" />;

const BadgeIcon = () => (
  <div>
    <Badge icon={Icon} text="icon" />
    {' '}
    <Badge icon={Icon} text="icon" isReversed />
    {' '}
    <Badge icon={Icon} />
  </div>
);

export default BadgeIcon;
