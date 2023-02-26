/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from 'terra-action-header/lib/ActionHeader';

const ActionHeaderExample = () => (
  <ActionHeader
    text="Next Enabled Previous Disabled Action Header"
    onNext={() => alert('You clicked next!')}
  />
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
