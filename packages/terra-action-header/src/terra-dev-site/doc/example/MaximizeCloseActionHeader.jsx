/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from '../../../ActionHeader';

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader
      title="Maximize Close Action Header"
      onClose={() => alert('You clicked close!')}
      onMaximize={() => alert('You clicked maximize!')}
    />
    <br />
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
