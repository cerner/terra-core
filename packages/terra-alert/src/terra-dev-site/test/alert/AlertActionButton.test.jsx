import React, { useState } from 'react';
import Button from 'terra-button';
import Alert from '../../../Alert';

const AlertActionButton = () => {
  const [actionButtonClickCount, setActionButtonClickCount] = useState(0);

  return (
    <Alert
      id="actionAlert"
      type="warning"
      action={(
        <Button
          text="Action"
          id="actionButtonClickCount"
          onClick={() => {
            const updatedCount = actionButtonClickCount + 1;
            setActionButtonClickCount(updatedCount);
          }}
        />
      )}
    >
      {`This is a warning. It is configured with a custom Action button. Action button has been clicked ${actionButtonClickCount} times.`}
    </Alert>
  );
};

export default AlertActionButton;
