/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from '../../lib/ActionHeader';

const ActionHeaderExample = () => (
  <ActionHeader
    title="Close Action Header"
    onClose={() => alert('You clicked close!')}
  />
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
