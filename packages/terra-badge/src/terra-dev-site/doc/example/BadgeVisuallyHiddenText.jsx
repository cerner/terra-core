import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Badge from 'terra-badge/lib/Badge';

const BadgeVisuallyHiddenText = () => (
  <div>
    <Badge text="Low" visuallyHiddenText="Rick Factor" />
    {' '}
    <Badge text="Medium" visuallyHiddenText="Rick Factor" />
    {' '}
    <Badge text="High" visuallyHiddenText="Rick Factor" />
    {' '}
    <Badge text="Critical" visuallyHiddenText="Rick Factor" />
  </div>
);

export default BadgeVisuallyHiddenText;
