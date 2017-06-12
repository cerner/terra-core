import React from 'react';
import Alert from 'terra-alert';

const alertStartTagStr = '<Alert type={Alert.Types.INFORMATION} >';
const alertEndTagStr = '</Alert>';

const InformationExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type information with default title</h3>
      <br />
      <code>
        {alertStartTagStr}This is an information alert{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={Alert.Types.INFORMATION} >This is an information alert</Alert>
  </div>
);

export default InformationExample;
