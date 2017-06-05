import React from 'react';
import Alert, { AlertTypes } from 'terra-alert';

const InformationExample = () => (
  <div>
    <h3>Basic Alert of type information with default title</h3>
    <br />
    <code>
      &lt;Alert type=&#x007B;AlertTypes.INFORMATION&#x007D; &gt;This is an information alert&lt;/Alert&gt;
    </code>
    <br /><br />
    <Alert type={AlertTypes.INFORMATION} >This is an information alert</Alert>
  </div>
);

export default InformationExample;
