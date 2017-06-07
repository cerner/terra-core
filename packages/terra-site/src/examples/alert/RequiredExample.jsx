import React from 'react';
import Alert, { AlertTypes } from 'terra-alert';

const alertStartTagStr = '<Alert type={AlertTypes.REQUIRED} >';
const alertEndTagStr = '</Alert>';

const RequiredExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type required with default title</h3>
      <br />
      <code>
        {alertStartTagStr}This is a required warning{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={AlertTypes.REQUIRED} >This is a required warning</Alert>
  </div>
);

export default RequiredExample;
