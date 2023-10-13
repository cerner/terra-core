import React, { useRef, useState } from 'react';
import Alert from 'terra-alert';
import Button from 'terra-button';
import { IconHelp } from 'terra-icon';
import Input from 'terra-form-input';
import MultiSelect from 'terra-form-select/lib/MultiSelect';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';
import classNames from 'classnames/bind';
import styles from '../../doc/alert/example/colors.module.scss';

const cx = classNames.bind(styles);

let alertIdx = 0;

const CustomPropExample = () => {
  const AlertTypes = {
    ALERT: 'alert',
    ERROR: 'error',
    WARNING: 'warning',
    UNSATISFIED: 'unsatisfied',
    UNVERIFIED: 'unverified',
    ADVISORY: 'advisory',
    INFO: 'info',
    SUCCESS: 'success',
    CUSTOM: 'custom',
  };
  const alertTypeMessages = {
    alert: 'Site is down for maintenance.',
    error: 'Unable to save at this time. Please try again later.',
    warning: 'There are unsaved changes.',
    unsatisfied:
      'Only one package must be selected before the Activate Content button is clicked.',
    unverified: 'This item is not verified.',
    advisory: 'This item is typically not used.',
    info: 'This receipt is for a bill-only purchase order.',
    success: 'Changes successfully committed.',
    custom: 'Welcome to Terra!',
  };
  const [actionButtonClickCount, setActionButtonClickCount] = useState(0);
  const [alertDelay, setAlertDelay] = useState(3000);
  const [notifications, setNotifications] = useState([
    {
      id: alertIdx,
      notificationMessage: alertTypeMessages[AlertTypes.SUCCESS],
      type: AlertTypes.SUCCESS,
      onDismiss: true,
    },
  ]);
  const [alerts, setAlerts] = useState([]);
  const [customMessage, setCustomMessage] = useState('Enter custom notification message');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAlertType, setSelectedAlertType] = useState(AlertTypes.ALERT);
  const [selectedProps, setSelectedProps] = useState(['action', 'onDismiss']);
  const alertsRef = useRef(alerts);
  const notificationsRef = useRef(notifications);

  const handleActionClick = () => {
    setActionButtonClickCount((prevCount) => prevCount + 1);
  };

  const handleAlertNotificationDismiss = (index) => {
    alertsRef.current.splice(index, 1);
    setAlerts([...alertsRef.current]);
  };

  const handleNotificationDismiss = (index) => {
    notificationsRef.current.splice(index, 1);
    setNotifications([...notificationsRef.current]);
  };

  const getAlert = () => ({
    id: alertIdx,
    type: selectedAlertType,
    notificationMessage:
      selectedProps.indexOf('customMessage') >= 0
        ? customMessage
        : alertTypeMessages[selectedAlertType],
    props: {
      action:
        selectedProps.indexOf('action') >= 0 ? (
          <Button
            text="Action"
            variant="emphasis"
            onClick={handleActionClick}
          />
        ) : null,
      customColorClass:
        selectedProps.indexOf('customColorClass') >= 0
          ? cx(['my-app-alert-help-example'])
          : null,
      customIcon:
        selectedProps.indexOf('customIcon') >= 0 ? <IconHelp /> : null,
      title: selectedProps.indexOf('title') >= 0 ? 'Terra Message' : null,
      disableAlertActionFocus:
        selectedProps.indexOf('disableAlertActionFocus') >= 0 ? true : null,
    },
    onDismiss: selectedProps.indexOf('onDismiss') >= 0,
  });

  const triggerNewAlert = () => {
    setTimeout(
      () => {
        alertIdx += 1;
        if (selectedAlertType === AlertTypes.ALERT) {
          alertsRef.current.push(getAlert());
          setAlerts([...alertsRef.current]);
        } else {
          notificationsRef.current.push(getAlert());
          setNotifications([...notificationsRef.current]);
        }
      },
      selectedProps.indexOf('alertDelay') >= 0 ? alertDelay : 0,
    );
  };

  return (
    <>
      {alerts && alerts.map((alert, index) => (
        <Alert
          key={alert.id}
          id={alert.id}
          type={alert.type}
          onDismiss={
            alert.onDismiss
              ? () => {
                handleAlertNotificationDismiss(index);
              }
              : null
          }
          {...alert.props}
        >
          {alert.notificationMessage}
        </Alert>
      ))}
      <div aria-live="polite">
        {isOpen && (
          <Alert
            id="replaceableAlert"
            type={selectedAlertType}
            onDismiss={() => setIsOpen(false)}
          >
            {`${alertTypeMessages[selectedAlertType]} Replaceable alert.`}
          </Alert>
        )}
        {notifications && notifications.map((alert, index) => (
          <Alert
            key={alert.id}
            id={alert.id}
            type={alert.type}
            onDismiss={
              alert.onDismiss
                ? () => {
                  handleNotificationDismiss(index);
                }
                : null
            }
            {...alert.props}
          >
            {alert.notificationMessage}
          </Alert>
        ))}
      </div>
      <br />
      <div id="alertType">Select notification type:</div>
      <NativeSelect
        ariaLabel="Notification types"
        isFilterStyle
        onChange={(event) => setSelectedAlertType(event.currentTarget.value)}
        options={Object.values(AlertTypes).map((alertType) => ({
          value: alertType,
          display: alertType,
        }))}
        value={selectedAlertType}
      />
      <div id="alertProps">Select notification banner props/options:</div>
      <MultiSelect
        placeholder="Select alert props"
        value={selectedProps}
        onChange={setSelectedProps}
      >
        <MultiSelect.Option value="action" display="action (prop)" />
        <MultiSelect.Option
          value="customColorClass"
          display="customColorClass (prop)"
        />
        <MultiSelect.Option value="customIcon" display="customIcon (prop)" />
        <MultiSelect.Option value="customMessage" display="customMessage" />
        <MultiSelect.Option value="disableAlertActionFocus" display="disableAlertActionFocus (prop)" />
        <MultiSelect.Option value="onDismiss" display="onDismiss (prop)" />
        <MultiSelect.Option value="title" display="title (prop)" />
        <MultiSelect.Option value="alertDelay" display="alertDelay" />
      </MultiSelect>
      {selectedProps.indexOf('alertDelay') >= 0 && (
        <>
          <div id="alertDelay">Set notification delay (ms):</div>
          <Input
            ariaLabel="Numeric Input"
            name="Set alert delay (ms)"
            onChange={(event) => setAlertDelay(event.target.value)}
            type="number"
            value={alertDelay}
          />
        </>
      )}
      {selectedProps.indexOf('customMessage') >= 0 && (
        <>
          <div id="alertMessage">Set custom notification message:</div>
          <Input
            ariaLabel="Set custom notification message"
            name="Set custom notification message"
            onChange={(event) => setCustomMessage(event.target.value)}
            value={customMessage}
          />
        </>
      )}
      <br />
      <Button text="Trigger Notification Banner" onClick={triggerNewAlert} />
      <Button
        isDisabled={isOpen}
        text="Trigger Replaceable Notification Banner"
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <p>{`Action button has been clicked ${actionButtonClickCount} times.`}</p>
    </>
  );
};

export default CustomPropExample;
