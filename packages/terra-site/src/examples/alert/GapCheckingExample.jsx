import React from 'react';
import Alert from 'terra-alert';

const alertStartTagStr = '<Alert type={Alert.Opts.Types.GAP_CHECKING} >';
const alertEndTagStr = '</Alert>';
const alertText = 'This is a gap-checking alert';

const GapCheckingExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type gap-checking with default title</h3>
      <br />
      <code>
        {alertStartTagStr}{alertText}{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={Alert.Opts.Types.GAP_CHECKING} >{alertText}</Alert>
  </div>
);

export default GapCheckingExample;
