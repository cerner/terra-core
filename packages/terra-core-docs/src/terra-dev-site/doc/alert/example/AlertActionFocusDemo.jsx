import React, { useState } from 'react';
import Button from 'terra-button';
import Alert from 'terra-alert';

const AlertActionFocusDemo = () => {
  const [actionButtonClickCount, setActionButtonClickCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <Alert
          onDismiss={() => setIsOpen(false)}
          action={(
            <Button
              text="Action"
              variant="emphasis"
              onClick={() => {
                setActionButtonClickCount((prevCount) => prevCount + 1);
              }}
            />
          )}
        >
          The notification banner should be focused upon render when navigating via keyboard.
        </Alert>
      )}
      <Button
        isDisabled={isOpen}
        text="Trigger Alert Notification Banner Demo"
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <p>{`Action button has been clicked ${actionButtonClickCount} times.`}</p>
    </>
  );
};

export default AlertActionFocusDemo;
