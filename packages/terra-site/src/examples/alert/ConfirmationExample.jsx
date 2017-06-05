import React from 'react';
import Alert, { AlertTypes } from 'terra-alert';

const ConfirmationExample = () => (
  <div>
    <h3>Basic Alert of type confirmation with default title</h3>
    <br />
    <code>
      &lt;Alert type=&#x007B;AlertTypes.CONFIRMATION&#x007D; &gt;This is a confirmation alert&lt;/Alert&gt;
    </code>
    <br /><br />
    <Alert type={AlertTypes.CONFIRMATION} >This is a confirmation alert</Alert>
  </div>
);

export default ConfirmationExample;
