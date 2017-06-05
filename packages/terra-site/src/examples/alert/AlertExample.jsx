import React from 'react';
import Alert, { AlertTypes } from 'terra-alert';

const AlertExample = () => (
  <div>
    <h3>Basic Alert of type alert with default title</h3>
    <br />
    <code>
      &lt;Alert type=&#x007B;AlertTypes.ALERT&#x007D; &gt;This is an alert&lt;/Alert&gt;
    </code>
    <br /><br />
    <Alert type={AlertTypes.ALERT} >This is an alert</Alert>
  </div>
);

export default AlertExample;
