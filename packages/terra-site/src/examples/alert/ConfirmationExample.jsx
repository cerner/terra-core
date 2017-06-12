import React from 'react';
import Alert from 'terra-alert';

const alertStartTagStr = '<Alert type={Alert.Types.CONFIRMATION} >';
const alertEndTagStr = '</Alert>';
const alertText = 'This is a confirmation alert';

const ConfirmationExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type confirmation with default title</h3>
      <br />
      <code>
        {alertStartTagStr}{alertText}{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={Alert.Types.CONFIRMATION} >{alertText}</Alert>
  </div>
);

export default ConfirmationExample;
