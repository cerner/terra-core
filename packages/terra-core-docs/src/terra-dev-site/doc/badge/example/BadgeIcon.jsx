import React from 'react';
import { IconBookmark } from 'terra-icon';
import Badge from 'terra-badge';

const Icon = <IconBookmark />;

const BadgeIcon = () => (
  <div>
    <Badge icon={Icon} text="icon" />
    {' '}
    <Badge icon={Icon} text="icon" isReversed />
    {' '}
    <Badge icon={Icon} />
    {' '}
    <Badge icon={Icon} visuallyHiddenText="Save" />
  </div>
);

export default BadgeIcon;
