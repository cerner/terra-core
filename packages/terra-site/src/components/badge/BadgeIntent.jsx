import React from 'react';
import Badge from 'terra-badge';

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
