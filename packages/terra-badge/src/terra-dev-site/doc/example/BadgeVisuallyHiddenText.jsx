import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Badge from 'terra-badge/lib/Badge';

const BadgeVisuallyHiddenText = () => (
  <div>
    <Badge text="Low" visuallyHiddenText="Risk Factor" />
    {' '}
    <Badge text="Medium" visuallyHiddenText="Risk Factor" />
    {' '}
    <Badge text="High" visuallyHiddenText="Risk Factor" />
    {' '}
    <Badge text="Critical" visuallyHiddenText="Risk Factor" />
  </div>
);

export default BadgeVisuallyHiddenText;
