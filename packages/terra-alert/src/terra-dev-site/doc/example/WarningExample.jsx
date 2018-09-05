import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Alert from 'terra-alert/lib/Alert';

const alertStartTagStr = '<Alert type="warning" >';
const alertEndTagStr = '</Alert>';
const alertText = 'This is a warning';

const WarningExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type warning with default title</h3>
      <br />
      <code>
        {alertStartTagStr}
        {alertText}
        {alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type="warning">{alertText}</Alert>
  </div>
);

export default WarningExample;
