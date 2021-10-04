import React from 'react';
import Badge from 'terra-badge';

const BadgeIntent = () => (
  <div>
    <Badge text="Default" id="default-badge" />
    {' '}
    <Badge intent="primary" text="Primary" id="primary-badge" />
    {' '}
    <Badge intent="secondary" text="Secondary" id="secondary-badge" />
    {' '}
    <Badge intent="positive" text="Positive" id="positive-badge" />
    {' '}
    <Badge intent="negative" text="Negative" id="negative-badge" />
    {' '}
    <Badge intent="warning" text="Warning" id="warning-badge" />
    {' '}
    <Badge intent="info" text="Info" id="info-badge" />
  </div>
);

export default BadgeIntent;
