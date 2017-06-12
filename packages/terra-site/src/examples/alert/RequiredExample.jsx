import React from 'react';
import Alert from 'terra-alert';

const alertStartTagStr = '<Alert type={Alert.Types.REQUIRED} >';
const alertEndTagStr = '</Alert>';
const alertText = 'This is a required warning';

const RequiredExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type required with default title</h3>
      <br />
      <code>
        {alertStartTagStr}{alertText}{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={Alert.Types.REQUIRED} >{alertText}</Alert>
  </div>
);

export default RequiredExample;
