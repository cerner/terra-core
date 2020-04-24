import React, { useState } from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import Alert from '../../../Alert';
import styles from './AlertTestCommon.scss';

const cx = classNames.bind(styles);

const AlertResponsiveToParent = () => {
  const [actionButtonClickCount, setActionButtonClickCount] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  return (
    <>
      <p>Alerts are responsive to their container width.</p>
      {!isDismissed && (
        <Alert
          id="dismissibleAlert"
          type="success"
          onDismiss={() => setIsDismissed(!isDismissed)}
        >
          This is a success alert. It is configured to be dismissible. Click on the Dismiss button to dismiss the alert.
        </Alert>
      )}
      <Alert type="info" />
      <div className={cx('content-wrapper')}>
        <p>
          Alerts with actions in a small container that will cause the action section of the alert to render below the message instead of beside it.
        </p>
        <Alert
          id="actionAlert"
          type="warning"
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
          This is a warning. It is configured with a custom Action button.
        </Alert>
        <Alert id="noActionsAlert" type="info">This is an info alert</Alert>
      </div>
    </>
  );
};

export default AlertResponsiveToParent;
