import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Badge from 'terra-badge/lib/Badge';

const BadgeIntent = () => (
  <div>
    <Badge text="Default" />
    {' '}
    <Badge intent="primary" text="Primary" />
    {' '}
    <Badge intent="secondary" text="Secondary" />
    {' '}
    <Badge intent="positive" text="Positive" />
    {' '}
    <Badge intent="negative" text="Negative" />
    {' '}
    <Badge intent="warning" text="Warning" />
    {' '}
    <Badge intent="info" text="Info" />
  </div>
);

export default BadgeIntent;
