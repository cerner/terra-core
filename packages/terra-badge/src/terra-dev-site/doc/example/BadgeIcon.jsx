import React from 'react';
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';
import Badge from '../../../Badge';

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
