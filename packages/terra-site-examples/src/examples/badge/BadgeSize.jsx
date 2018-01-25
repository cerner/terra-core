import React from 'react';
import Badge from 'terra-badge';

const BadgeSize = () => (
  <div>
    <Badge size="tiny" text="Tiny" />
    {' '}
    <Badge size="small" text="Small" />
    {' '}
    <Badge size="medium" text="Medium" />
    {' '}
    <Badge size="large" text="Large" />
    {' '}
    <Badge size="huge" text="Huge" />
  </div>
);

export default BadgeSize;
