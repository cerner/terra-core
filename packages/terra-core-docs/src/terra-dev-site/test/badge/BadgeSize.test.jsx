import React from 'react';
import Badge from 'terra-badge';

const BadgeSize = () => (
  <div>
    <Badge size="tiny" text="Tiny" id="tiny-badge" />
    {' '}
    <Badge size="small" text="Small" id="small-badge" />
    {' '}
    <Badge size="medium" text="Medium" id="medium-badge" />
    {' '}
    <Badge size="large" text="Large" id="large-badge" />
    {' '}
    <Badge size="huge" text="Huge" id="huge-badge" />
  </div>
);

export default BadgeSize;
