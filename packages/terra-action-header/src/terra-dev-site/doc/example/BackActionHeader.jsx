/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from '../../../ActionHeader';

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader
      title="Back Action Header"
      onBack={() => alert('You clicked back!')}
    />
    <br />
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
