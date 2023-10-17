import React, { useState } from 'react';

import Alert from 'terra-alert';
import Button from 'terra-button';

const AlertDismissible = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen ? (
        <div aria-live="polite">
          <Alert
            id="dismissibleAlert"
            type="success"
            onDismiss={() => setIsOpen(false)}
          >
            This is a dismissible notification banner.
          </Alert>
        </div>
      ) : (
        <div id="dismissed">Notification banner was dismissed</div>
      )}
      <br />
      <Button
        isDisabled={isOpen}
        text="Trigger Notification Banner"
        onClick={() => {
          setIsOpen(true);
        }}
      />
    </>
  );
};

export default AlertDismissible;
