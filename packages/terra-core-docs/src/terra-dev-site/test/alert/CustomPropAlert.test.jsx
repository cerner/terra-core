import React, { useState } from 'react';
import Alert from 'terra-alert';
import Button from 'terra-button';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
import MultiSelect from 'terra-form-select/lib/MultiSelect';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';
import classNames from 'classnames/bind';
import styles from '../../doc/alert/example/colors.module.scss';

const cx = classNames.bind(styles);

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
  const longText = () => (
    <>
      <p>
        Four score and seven years ago our fathers brought forth on this
        continent, a new nation, conceived in Liberty, and dedicated to the
        proposition that all men are created equal.
      </p>
      <p>
        Now we are engaged in a great civil war, testing whether that nation, or
        any nation so conceived and so dedicated, can long endure. We are met on
        a great battle-field of that war. We have come to dedicate a portion of
        that field, as a final resting place for those who here gave their lives
        that that nation might live. It is altogether fitting and proper that we
        should do this.
      </p>
      <p>
        But, in a larger sense, we can not dedicate -- we can not consecrate --
        we can not hallow -- this ground. The brave men, living and dead, who
        struggled here, have consecrated it, far above our poor power to add or
        detract. The world will little note, nor long remember what we say here,
        but it can never forget what they did here. It is for us the living,
        rather, to be dedicated here to the unfinished work which they who
        fought here have thus far so nobly advanced. It is rather for us to be
        here dedicated to the great task remaining before us -- that from these
        honored dead we take increased devotion to that cause for which they
        gave the last full measure of devotion -- that we here highly resolve
        that these dead shall not have died in vain -- that this nation, under
        God, shall have a new birth of freedom -- and that government of the
        people, by the people, for the people, shall not perish from the earth.
      </p>
    </>
  );
  const [actionButtonClickCount, setActionButtonClickCount] = useState(0);
  const [alerts, setAlerts] = useState([]);
  const [selectedAlertType, setSelectedAlertType] = useState(
    AlertTypes.SUCCESS
  );
  const [selectedProps, setSelectedProps] = useState(['onDismiss']);

  const handleActionClick = () => {
    setActionButtonClickCount((prevCount) => prevCount + 1);
  };

  const triggerNewAlert = () => {
    alerts.push({
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
        customIcon:
          selectedProps.indexOf('customIcon') >= 0 ? <IconHelp /> : null,
        title: selectedProps.indexOf('title') >= 0 ? 'Terra Message' : null,
      },
      onDismiss: selectedProps.indexOf('onDismiss') >= 0,
      useLongerText: selectedProps.indexOf('useLongerText') >= 0,
    });
    setAlerts([...alerts]);
  };

  return (
    <>
      {alerts &&
        alerts.map((alert, index) => (
          <Alert
            key={index}
            id="customAlert"
            customColorClass={cx(['my-app-alert-help-example'])}
            type={alert.type}
            onDismiss={
              alert.onDismiss
                ? () => {
                    const updatedAlerts = [...alerts];
                    updatedAlerts.splice(index, 1);
                    setAlerts(updatedAlerts);
                  }
                : null
            }
            {...alert.props}
          >
            {alert.useLongerText ? longText() : alertTypeMessages[alert.type]}
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
        <MultiSelect.Option value="action" display="action" />
        <MultiSelect.Option value="customIcon" display="customIcon" />
        <MultiSelect.Option value="onDismiss" display="onDismiss" />
        <MultiSelect.Option value="title" display="title" />
        <MultiSelect.Option value="useLongerText" display="Use Long Text" />
      </MultiSelect>
      <br />
      <Button text="Trigger Alert" onClick={triggerNewAlert} />
      <p>{`Action button has been clicked ${actionButtonClickCount} times.`}</p>
    </>
  );
};

export default CustomPropExample;
