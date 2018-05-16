/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from '../../../ActionHeader';

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader
      title="Close Action Header"
      onClose={() => alert('You clicked close!')}
    />
    <br />
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
