import React from 'react';
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Badge from 'terra-badge/lib/Badge';

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
