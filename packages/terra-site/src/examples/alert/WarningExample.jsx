import React from 'react';
import Alert, { AlertTypes } from 'terra-alert';

const WarningExample = () => (
  <div>
    <h3>Basic Alert of type warning with default title</h3>
    <br />
    <code>
      &lt;Alert type=&#x007B;AlertTypes.WARNING&#x007D; &gt;This is a warning&lt;/Alert&gt;
    </code>
    <br /><br />
    <Alert type={AlertTypes.WARNING} >This is a warning</Alert>
  </div>
);

export default WarningExample;
