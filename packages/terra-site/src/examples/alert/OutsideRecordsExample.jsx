import React from 'react';
import Alert from 'terra-alert';

const alertStartTagStr = '<Alert type={Alert.Types.OUTSIDE_RECORDS} >';
const alertEndTagStr = '</Alert>';
const alertText = 'This is an outside records alert';

const OutsideRecordsExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type Outside Records with default title</h3>
      <br />
      <code>
        {alertStartTagStr}{alertText}{alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={Alert.Types.OUTSIDE_RECORDS} >{alertText}</Alert>
  </div>
);

export default OutsideRecordsExample;
