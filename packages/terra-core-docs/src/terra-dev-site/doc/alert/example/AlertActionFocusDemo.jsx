import React, { useState } from 'react';
import Button from 'terra-button';
import Alert from 'terra-alert';

const AlertActionFocusDemo = () => {
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
              onClick={() => {}}
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
    </>
  );
};

export default AlertActionFocusDemo;
