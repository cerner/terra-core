/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from 'terra-action-header/lib/ActionHeader';

const ActionHeaderExample = () => (
  <ActionHeader
    text="Back Close Previous Next Action Header"
    onBack={() => alert('You clicked back!')}
    onClose={() => alert('You clicked close!')}
    onPrevious={() => alert('You clicked previous!')}
    onNext={() => alert('You clicked next!')}
  />
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
