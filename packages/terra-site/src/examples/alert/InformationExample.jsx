import React from 'react';
import Alert from 'terra-alert';

const alertStartTagStr = '<Alert type={Alert.Types.INFORMATION} >';
const alertEndTagStr = '</Alert>';
const alertText = 'This is an information alert';

const InformationExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type information with default title</h3>
      <br />
      <code>
        {alertStartTagStr}{alertText}{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={Alert.Types.INFORMATION} >{alertText}</Alert>
  </div>
);

export default InformationExample;
