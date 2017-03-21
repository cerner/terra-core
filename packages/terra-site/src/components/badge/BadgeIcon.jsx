import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';
import Badge from 'terra-badge';

const Icon = <IconBookmark />;

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
