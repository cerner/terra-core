import React, { useState } from 'react';
import Button from 'terra-button';
import Alert from '../../../Alert';

const AlertDismissible = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <>
        <div id="dismissed">Alert was dismissed</div>
        <Button
          text="Trigger Alert"
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </>
    );
  }

  return (
    <Alert id="dismissibleAlert" type="success" onDismiss={() => setIsOpen(!isOpen)}>
      This is a dismissable Alert.
    </Alert>
  );
};

export default AlertDismissible;
