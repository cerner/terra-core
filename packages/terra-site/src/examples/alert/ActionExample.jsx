import React from 'react';
import Alert, { AlertTypes } from 'terra-alert';
import Button from 'terra-button';

const actionFunc = () => {
  // eslint-disable-next-line no-alert
  alert('Action performed');
};

const ActionExample = () => (
  <div>
    <h3>Basic Alert of type warning with default title</h3>
    <br />
    <code>
      &lt;Alert type=&#x007B;AlertTypes.WARNING&#x007D; alertAction=&#x007B;&lt;Button text=&quot;Action&quot; size=&quot;medium&quot; variant=&quot;primary&quot; onClick=&#x007B;actionFunc&#x007D; /&gt;&#x007D; &gt;This is a warning&lt;/Alert&gt;
    </code>
    <br /><br />
    <Alert type={AlertTypes.WARNING} alertAction={<Button text="Action" size="medium" variant="primary" onClick={actionFunc} />} >
      This is a warning. It is configured with a custom Action button.
    </Alert>
  </div>
);

export default ActionExample;
