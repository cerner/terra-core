/* eslint-disable no-alert */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ActionHeader from 'terra-action-header/lib/ActionHeader';

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader
      title="Back Close Previous Next Action Header"
      onClose={() => alert('You clicked close!')}
      onBack={() => alert('You clicked back!')}
      onPrevious={() => alert('You clicked previous!')}
      onNext={() => alert('You clicked next!')}
    />
    <br />
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
