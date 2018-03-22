/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from '../../../../terra-action-header'; // TODO: Resolve path

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader
      title="Keep Closed Action Header"
      onClose={() => alert('You clicked close!')}
      keepCloseButton
    />
    <br />
  </div>
);

export default ActionHeaderExample;
