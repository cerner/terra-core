import React from 'react';
import Badge from '../../../Badge';

const BadgeVisuallyHiddenText = () => (
  <div>
    <Badge text="Low" visuallyHiddenText="Risk Factor Low" />
    {' '}
    <Badge text="Medium" visuallyHiddenText="Risk Factor Medium" />
    {' '}
    <Badge text="High" visuallyHiddenText="Risk Factor High" />
    {' '}
    <Badge text="Critical" visuallyHiddenText="Risk Factor Critical" />
  </div>
);

export default BadgeVisuallyHiddenText;
