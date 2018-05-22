import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Badge from 'terra-badge/lib/Badge';

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
