import React from 'react';
import Alert, { AlertTypes } from 'terra-alert';

const alertStartTagStr = '<Alert type={AlertTypes.WARNING} >';
const alertEndTagStr = '</Alert>';

const WarningExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type warning with default title</h3>
      <br />
      <code>
        {alertStartTagStr}This is a warning{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={AlertTypes.WARNING} >This is a warning</Alert>
  </div>
);

export default WarningExample;
