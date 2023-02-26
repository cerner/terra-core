/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from 'terra-action-header';

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader
      text="Back Close Action Header"
      onClose={() => alert('You clicked close!')}
      onBack={() => alert('You clicked back!')}
      backButtonA11yLabel="Show Back Alert"
    />
    <br />
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
