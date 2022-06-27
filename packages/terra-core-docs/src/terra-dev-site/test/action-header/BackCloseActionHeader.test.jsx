/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from 'terra-action-header/lib/ActionHeader';

const ActionHeaderExample = () => (
  <ActionHeader
    text="Back Close Action Header"
    onBack={() => alert('You clicked back!')}
    onClose={() => alert('You clicked close!')}
    level={1}
  />
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
