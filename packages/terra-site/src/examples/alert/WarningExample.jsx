import React from 'react';
import Alert from 'terra-alert';

const alertStartTagStr = '<Alert type={Alert.Opts.Types.WARNING} >';
const alertEndTagStr = '</Alert>';
const alertText = 'This is a warning';

const WarningExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type warning with default title</h3>
      <br />
      <code>
        {alertStartTagStr}{alertText}{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={Alert.Opts.Types.WARNING} >{alertText}</Alert>
  </div>
);

export default WarningExample;
