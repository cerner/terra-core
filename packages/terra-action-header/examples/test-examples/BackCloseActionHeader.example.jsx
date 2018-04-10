/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from '../../lib/ActionHeader';

const ActionHeaderExample = () => (
  <ActionHeader
    title="Back Close Action Header"
    onBack={() => alert('You clicked back!')}
    onClose={() => alert('You clicked close!')}
  />
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
