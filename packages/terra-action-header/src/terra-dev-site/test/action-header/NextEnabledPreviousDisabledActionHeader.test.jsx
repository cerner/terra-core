/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from '../../../ActionHeader';

const ActionHeaderExample = () => (
  <ActionHeader
    title="Next Enabled Previous Disabled Action Header"
    onNext={() => alert('You clicked next!')}
  />
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
