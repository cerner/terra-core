import React from 'react';
import Alert from 'terra-alert';
import Button from 'terra-button';

const actionFunc = () => {
  // eslint-disable-next-line no-alert
  alert('Action performed');
};
const alertStartTagStr = '<Alert type={Alert.Types.WARNING} alertAction={<Button text="Action" size="medium" variant="primary" onClick={actionFunc} />} >';
const alertEndTagStr = '</Alert>';
const alertText = 'This is a warning. It is configured with a custom Action button.';

const ActionExample = () => (
  <div>
    <div dir="ltr">
      <h3>Basic Alert of type warning with action button</h3>
      <br />
      <code>
        {alertStartTagStr}
        <br />
        &nbsp;&nbsp;{alertText}.
        <br />
        {alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={Alert.Types.WARNING} alertAction={<Button text="Action" size="medium" variant="primary" onClick={actionFunc} />} >
      {alertText}
    </Alert>
  </div>
);

export default ActionExample;
