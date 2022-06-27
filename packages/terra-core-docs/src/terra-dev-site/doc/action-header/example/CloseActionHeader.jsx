/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from 'terra-action-header';

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader
      text="Close Action Header"
      onClose={() => alert('You clicked close!')}
      level={3}
    />
    <br />
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
