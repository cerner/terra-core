import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Alert from 'terra-alert/lib/Alert';

const alertStartTagStr = '<Alert type="advisory" >';
const alertEndTagStr = '</Alert>';
const alertText = 'This is an advisory alert';

const AdvisoryExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type advisory with default title</h3>
      <br />
      <code>
        {alertStartTagStr}
        {alertText}
        {alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type="advisory">{alertText}</Alert>
  </div>
);

export default AdvisoryExample;
