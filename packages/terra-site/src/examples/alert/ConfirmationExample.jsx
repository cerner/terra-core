import React from 'react';
import Alert, { AlertTypes } from 'terra-alert';

const alertStartTagStr = '<Alert type={AlertTypes.CONFIRMATION} >';
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
    <Alert type={AlertTypes.CONFIRMATION} >This is a confirmation alert</Alert>
  </div>
);

export default ConfirmationExample;
