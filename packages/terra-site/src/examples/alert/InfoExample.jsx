import React from 'react';
import Alert from 'terra-alert';

const alertStartTagStr = '<Alert type={Alert.Opts.Types.INFO} >';
const alertEndTagStr = '</Alert>';
const alertText = 'This is an information alert';

const InfoExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type info with default title</h3>
      <br />
      <code>
        {alertStartTagStr}{alertText}{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={Alert.Opts.Types.INFO} >{alertText}</Alert>
  </div>
);

export default InfoExample;
