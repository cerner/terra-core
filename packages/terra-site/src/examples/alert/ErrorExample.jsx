import React from 'react';
import Alert from 'terra-alert';

const alertStartTagStr = '<Alert type={Alert.Opts.Types.ERROR} >';
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
    <Alert type={Alert.Opts.Types.ERROR} >{alertText}</Alert>
  </div>
);

export default ErrorExample;
