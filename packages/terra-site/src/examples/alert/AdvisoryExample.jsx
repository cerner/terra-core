import React from 'react';
import Alert from 'terra-alert';

const alertStartTagStr = '<Alert type={Alert.Types.ADVISORY} >';
const alertEndTagStr = '</Alert>';

const AdvisoryExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type advisory with default title</h3>
      <br />
      <code>
        {alertStartTagStr}This is an advisory alert{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={Alert.Types.ADVISORY} >This is an advisory alert</Alert>
  </div>
);

export default AdvisoryExample;
