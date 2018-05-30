import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Alert from 'terra-alert/lib/Alert';

const alertStartTagStr = '<Alert type="error" >';
const alertEndTagStr = '</Alert>';
const alertText = 'This is an error';

const ErrorExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type error with default title</h3>
      <br />
      <code>
        {alertStartTagStr}{alertText}{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type="error" >{alertText}</Alert>
  </div>
);

export default ErrorExample;
