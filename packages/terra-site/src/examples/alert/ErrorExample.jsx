import React from 'react';
import Alert, { AlertTypes } from 'terra-alert';

const ErrorExample = () => (
  <div>
    <h3>Basic Alert of type error with default title</h3>
    <br />
    <code>
      &lt;Alert type=&#x007B;AlertTypes.ERROR&#x007D; &gt;This is an error&lt;/Alert&gt;
    </code>
    <br /><br />
    <Alert type={AlertTypes.ERROR} >This is an error</Alert>
  </div>
);

export default ErrorExample;
