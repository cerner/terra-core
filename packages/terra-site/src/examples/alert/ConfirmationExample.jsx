import React from 'react';
import Alert from 'terra-alert';

const alertStartTagStr = '<Alert type={Alert.Types.CONFIRMATION} >';
const alertEndTagStr = '</Alert>';

const ConfirmationExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type confirmation with default title</h3>
      <br />
      <code>
        {alertStartTagStr}This is a confirmation alert{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={Alert.Types.CONFIRMATION} >This is a confirmation alert</Alert>
  </div>
);

export default ConfirmationExample;
