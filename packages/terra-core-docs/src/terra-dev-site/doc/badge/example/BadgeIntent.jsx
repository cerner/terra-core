import React from 'react';
import Badge from 'terra-badge';

const BadgeIntent = () => (
  <div>
    <Badge text="Patient Arrival" />
    {' '}
    <Badge intent="primary" text="Admitted" />
    {' '}
    <Badge intent="secondary" text="Discharged" />
    {' '}
    <Badge intent="positive" text="Recovery" />
    {' '}
    <Badge intent="negative" text="Complications" />
    {' '}
    <Badge intent="warning" text="Urgent" />
    {' '}
    <Badge intent="info" text="Medical Notes" />
  </div>
);

export default BadgeIntent;
