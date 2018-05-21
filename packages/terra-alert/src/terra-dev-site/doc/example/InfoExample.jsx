import React from 'react';
import Alert from '../../../Alert';

const alertStartTagStr = '<Alert type="info" >';
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
    <Alert type="info" >{alertText}</Alert>
  </div>
);

export default InfoExample;
