import React, { useState } from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import Alert from 'terra-alert';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);

const ActionAndDismissibleExample = () => {
  const [actionButtonClickCount, setActionButtonClickCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <Alert
          type="custom"
          onDismiss={() => setIsOpen(false)}
          customColorClass={cx(['my-app-alert-dismiss-example'])}
          action={(
            <Button
              text="Action"
              variant="emphasis"
              onClick={() => {
                const updatedCount = actionButtonClickCount + 1;
                setActionButtonClickCount(updatedCount);
              }}
            />
          )}
        >
          This is a custom alert with no icon or title. It is configured to be dismissible and with a custom action button. Click on the Dismiss button to dismiss the alert.
        </Alert>
      )}
      <br />
      <p>
        {`Action button has been clicked ${actionButtonClickCount} times.`}
      </p>
      {!isOpen && (
        <Button
          text="Trigger Alert"
          onClick={() => {
            setIsOpen(true);
          }}
        />
      )}
    </>
  );
};

export default ActionAndDismissibleExample;
