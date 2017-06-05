import React from 'react';
import Alert, { AlertTypes } from 'terra-alert';

const AdvisoryExample = () => (
  <div>
    <h3>Basic Alert of type advisory with default title</h3>
    <br />
    <code>
      &lt;Alert type=&#x007B;AlertTypes.ADVISORY&#x007D; &gt;This is an advisory alert&lt;/Alert&gt;
    </code>
    <br /><br />
    <Alert type={AlertTypes.ADVISORY} >This is an advisory alert</Alert>
  </div>
);

export default AdvisoryExample;
