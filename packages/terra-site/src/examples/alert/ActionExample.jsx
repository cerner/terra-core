import React from 'react';
import Alert, { AlertTypes } from 'terra-alert';
import Button from 'terra-button';

const actionFunc = () => {
  // eslint-disable-next-line no-alert
  alert('Action performed');
};
const alertStartTagStr = '<Alert type={AlertTypes.WARNING} alertAction={<Button text="Action" size="medium" variant="primary" onClick={actionFunc} />} >';
const alertEndTagStr = '</Alert>';

const ActionExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type warning with action button</h3>
      <br />
      <code>
        {alertStartTagStr}
        <br />
          &nbsp;&nbsp;This is a warning
        <br />
        {alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={AlertTypes.WARNING} alertAction={<Button text="Action" size="medium" variant="primary" onClick={actionFunc} />} >
      This is a warning. It is configured with a custom Action button.
    </Alert>
  </div>
);

export default ActionExample;
