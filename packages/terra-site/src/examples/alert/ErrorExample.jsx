import React from 'react';
import Alert, { AlertTypes } from 'terra-alert';

const alertStartTagStr = '<Alert type={AlertTypes.ERROR} >';
const alertEndTagStr = '</Alert>';

const ErrorExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type error with default title</h3>
      <br />
      <code>
        {alertStartTagStr}This is an error{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={AlertTypes.ERROR} >This is an error</Alert>
  </div>
);

export default ErrorExample;
