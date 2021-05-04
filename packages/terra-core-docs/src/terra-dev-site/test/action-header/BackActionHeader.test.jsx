/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from 'terra-action-header/lib/ActionHeader';

const ActionHeaderExample = () => (
  <ActionHeader
    title="Back Action Header"
    onBack={() => alert('You clicked back!')}
  />
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
