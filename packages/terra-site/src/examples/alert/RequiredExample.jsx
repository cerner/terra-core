import React from 'react';
import Alert, { AlertTypes } from 'terra-alert';

const RequiredExample = () => (
  <div>
    <h3>Basic Alert of type required with default title</h3>
    <br />
    <code>
      &lt;Alert type=&#x007B;AlertTypes.REQUIRED&#x007D; &gt;This is a required warning&lt;/Alert&gt;
    </code>
    <br /><br />
    <Alert type={AlertTypes.REQUIRED} >This is a required warning</Alert>
  </div>
);

export default RequiredExample;
