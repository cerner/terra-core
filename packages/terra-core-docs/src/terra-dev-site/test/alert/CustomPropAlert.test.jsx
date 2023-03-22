import React, { useRef, useState } from 'react';
import Alert from 'terra-alert';
import Button from 'terra-button';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
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
  const [alerts, setAlerts] = useState([
    {
      id: alertIdx,
      type: AlertTypes.SUCCESS,
      onDismiss: true,
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAlertType, setSelectedAlertType] = useState(AlertTypes.SUCCESS);
  const [selectedProps, setSelectedProps] = useState(['onDismiss']);
  const alertsRef = useRef(alerts);

  const handleActionClick = () => {
    setActionButtonClickCount((prevCount) => prevCount + 1);
  };

  const handleAlertDismiss = (index) => {
    alertsRef.current.splice(index, 1);
    setAlerts([...alertsRef.current]);
  };

  const triggerNewAlert = () => {
    setTimeout(
      () => {
        alertIdx += 1;
        alertsRef.current.push({
          id: alertIdx,
          type: selectedAlertType,
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
          },
          onDismiss: selectedProps.indexOf('onDismiss') >= 0,
        });
        setAlerts([...alertsRef.current]);
      },
      selectedProps.indexOf('alertDelay') >= 0 ? alertDelay : 0,
    );
  };

  return (
    <>
      {isOpen && (
        <Alert
          id="replaceableAlert"
          type={selectedAlertType}
          onDismiss={() => setIsOpen(false)}
        >
          {`${alertTypeMessages[selectedAlertType]} Replaceable alert.`}
        </Alert>
      )}
      {alerts && alerts.map((alert, index) => (
        <Alert
          key={alert.id}
          id="customAlert"
          type={alert.type}
          onDismiss={
            alert.onDismiss
              ? () => {
                handleAlertDismiss(index);
              }
              : null
          }
          {...alert.props}
        >
          {alertTypeMessages[alert.type]}
        </Alert>
      ))}
      <br />
      <div id="alertType">Select alert type:</div>
      <NativeSelect
        ariaLabel="Alert types"
        isFilterStyle
        onChange={(event) => setSelectedAlertType(event.currentTarget.value)}
        options={Object.values(AlertTypes).map((alertType) => ({
          value: alertType,
          display: alertType,
        }))}
        value={selectedAlertType}
      />
      <div id="alertProps">Select alert props/options:</div>
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
        <MultiSelect.Option value="onDismiss" display="onDismiss (prop)" />
        <MultiSelect.Option value="title" display="title (prop)" />
        <MultiSelect.Option value="alertDelay" display="alertDelay" />
      </MultiSelect>
      {selectedProps.indexOf('alertDelay') >= 0 && (
        <>
          <div id="alertDelay">Set alert delay (ms):</div>
          <Input
            ariaLabel="Numeric Input"
            name="Set alert delay (ms)"
            onChange={(event) => setAlertDelay(event.target.value)}
            type="number"
            value={alertDelay}
          />
        </>
      )}
      <br />
      <Button text="Trigger Custom Alert" onClick={triggerNewAlert} />
      <Button
        isDisabled={isOpen}
        text="Trigger Replaceable Alert"
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <p>{`Action button has been clicked ${actionButtonClickCount} times.`}</p>
    </>
  );
};

export default CustomPropExample;
