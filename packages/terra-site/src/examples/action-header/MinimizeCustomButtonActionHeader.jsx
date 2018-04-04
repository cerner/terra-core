/* eslint-disable no-alert */
import React from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header';

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader title="Minimize Custom Button Action Header" onMinimize={() => alert('You clicked minimize!')} onClose={() => alert('You clicked close!')}>
      <Button text="Custom Button" onClick={() => alert('You clicked me!')} />
    </ActionHeader>
    <br />
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
