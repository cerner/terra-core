/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from 'terra-action-header/lib/ActionHeader';

const ActionHeaderExample = () => (
  <ActionHeader
    text="Close Action Header"
    onClose={() => alert('You clicked close!')}
    level={1}
  />
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
