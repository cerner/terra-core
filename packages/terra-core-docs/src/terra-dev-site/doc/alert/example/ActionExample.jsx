import React, { useState } from 'react';

import Alert from 'terra-alert';
import Button from 'terra-button';
import { IconHazardLow } from 'terra-icon';

const AlertActionButton = () => {
  const [actionButtonClickCount, setActionButtonClickCount] = useState(0);

  const action = () => {
    setActionButtonClickCount(prevCount => prevCount + 1);
  };

  return (
    <Alert
      id="actionAlert"
      title="Action Required."
      type="custom"
      customIcon={<IconHazardLow />}
      action={(
        <Button
          aria-describedby="alert-title-actionAlert"
          text="Action"
          variant="emphasis"
          onClick={action}
        />
      )}
    >
      {`This is a notification configured with a custom action. Action button has been clicked ${actionButtonClickCount} times.`}
    </Alert>
  );
};

export default AlertActionButton;
