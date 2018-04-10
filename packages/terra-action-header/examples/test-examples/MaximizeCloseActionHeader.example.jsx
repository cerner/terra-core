/* eslint-disable no-alert, import/no-extraneous-dependencies */
import React from 'react';
import Button from 'terra-button';
import ActionHeader from '../../lib/ActionHeader';

const ActionHeaderExample = () => (
  <div>
    <ActionHeader title="Minimize Custom Button Action Header" onMaximize={() => alert('You clicked maximize!')} >
      <Button text="Custom Button" onClick={() => alert('You clicked me!')} />
    </ActionHeader>
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
