import React from 'react';
import Alert from 'terra-alert';

const alertStartTagStr = '<Alert type={Alert.Opts.Types.ALERT} >';
const alertEndTagStr = '</Alert>';
const alertText = 'This is an alert';

const AlertExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type alert with default title</h3>
      <br />
      <code>
        {alertStartTagStr}{alertText}{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={Alert.Opts.Types.ALERT} >{alertText}</Alert>
  </div>
);

export default AlertExample;
