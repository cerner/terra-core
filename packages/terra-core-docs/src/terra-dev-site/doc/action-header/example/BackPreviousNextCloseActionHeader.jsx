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
      onPrevious={() => alert('You clicked previous!')}
      onNext={() => alert('You clicked next!')}
      nextButtonA11yLabel="Show Next Alert"
      prevButtonA11yLabel=" Show Previous Alert"
      backButtonA11yLabel="Show Back Alert"
      level={3}
    />
    <br />
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
