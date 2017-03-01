import React from 'react';
import Badge from '../src/Badge';

const Icon = <span style={{ backgroundColor: 'black', color: 'black', height: '1em', width: '1em' }}>....</span>;

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
