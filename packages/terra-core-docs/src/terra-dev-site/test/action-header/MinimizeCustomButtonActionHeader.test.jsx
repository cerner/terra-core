/* eslint-disable no-alert */
import React from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header/lib/ActionHeader';

const ActionHeaderExample = () => (
  <ActionHeader text="Minimize Custom Button Action Header" onMinimize={() => alert('You clicked minimize!')}>
    <Button text="Custom Button" onClick={() => alert('You clicked me!')} />
  </ActionHeader>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
