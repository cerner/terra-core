import React from 'react';
import Alert from 'terra-alert';

const alertStartTagStr = '<Alert type={Alert.Opts.Types.ADVISORY} >';
const alertEndTagStr = '</Alert>';
const alertText = 'This is an advisory alert';

const AdvisoryExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type advisory with default title</h3>
      <br />
      <code>
        {alertStartTagStr}{alertText}{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={Alert.Opts.Types.ADVISORY} >{alertText}</Alert>
  </div>
);

export default AdvisoryExample;
