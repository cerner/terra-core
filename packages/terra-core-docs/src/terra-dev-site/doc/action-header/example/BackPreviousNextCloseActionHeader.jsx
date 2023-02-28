/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from 'terra-action-header';

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader
      text="Back Close Previous Next Action Header"
      onClose={() => alert('You clicked close!')}
      onBack={() => alert('You clicked back!')}
      backButtonA11yLabel="Show Back Alert"
      onPrevious={() => alert('You clicked previous!')}
      prevButtonA11yLabel=" Show Previous Alert"
      onNext={() => alert('You clicked next!')}
      nextButtonA11yLabel="Show Next Alert"
    />
    <br />
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
