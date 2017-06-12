import React from 'react';
import Alert from 'terra-alert';

const alertStartTagStr = '<Alert type={Alert.Types.ALERT} >';
const alertEndTagStr = '</Alert>';

const AlertExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type alert with default title</h3>
      <br />
      <code>
        {alertStartTagStr}This is an alert{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={Alert.Types.ALERT} >This is an alert</Alert>
  </div>
);

export default AlertExample;
