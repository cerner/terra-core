import React from 'react';
import Badge from '../../../Badge';

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
