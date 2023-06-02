import React, { useState } from 'react';
import Button from 'terra-button';
import Alert from 'terra-alert';

const AlertAlert = () => {
  const [actionButtonClickCount, setActionButtonClickCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handleActionClick = () => {
    setActionButtonClickCount((prevCount) => prevCount + 1);
  };

  const alert = (
    <Alert
      id="actionAlert"
      action={<Button text="Action" onClick={handleActionClick} />}
    >
      This is a critical alert notification. It is configured with a custom Action button.
    </Alert>
  );

  return (
    <div>
      <Button text="Dummy Button" onClick={() => console.log('Click')} />
      <br />
      <br />
      <Alert
        id="successAlert"
        type="success"
        action={<Button text="Action" onClick={handleActionClick} />}
        onDismiss={() => console.log('Dismiss')}
      >
        Test
      </Alert>
      {isOpen && alert}
      <br />
      <Button text="Dummy Button" />
      <p>{`Action button has been clicked ${actionButtonClickCount} times.`}</p>
      <Button
        text="Trigger Alert"
        onClick={() => setIsOpen((prevState) => !prevState)}
      />
    </div>
  );
};

export default AlertAlert;
