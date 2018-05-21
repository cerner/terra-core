import React from 'react';
import Alert from '../../../Alert';

const alertStartTagStr = '<Alert type="success" >';
const alertEndTagStr = '</Alert>';
const alertText = 'This is a success alert';

const SuccessExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type success with default title</h3>
      <br />
      <code>
        {alertStartTagStr}{alertText}{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type="success" >{alertText}</Alert>
  </div>
);

export default SuccessExample;
