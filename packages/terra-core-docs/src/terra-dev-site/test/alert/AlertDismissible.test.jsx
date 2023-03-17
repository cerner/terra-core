import React, { useState } from 'react';
import Button from 'terra-button';
import Alert from 'terra-alert';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';

const AlertDismissible = () => {
  const AlertTypes = {
    ALERT: 'alert',
    ERROR: 'error',
    WARNING: 'warning',
    UNSATISFIED: 'unsatisfied',
    UNVERIFIED: 'unverified',
    ADVISORY: 'advisory',
    INFO: 'info',
    SUCCESS: 'success',
  };
  const [isOpen, setIsOpen] = useState(true);
  const [selectedAlertType, setSelectedAlertType] = useState(
    AlertTypes.SUCCESS
  );

  return (
    <>
      {isOpen && (
        <Alert
          id="dismissibleAlert"
          type={selectedAlertType}
          onDismiss={() => setIsOpen(false)}
        >
          This is a dismissable Alert.
        </Alert>
      )}
      <br />
      <div id="dismissed">Select alert type:</div>
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
      <br />
      <Button
        isDisabled={isOpen}
        text="Trigger Alert"
        onClick={() => {
          setIsOpen(true);
        }}
      />
    </>
  );
};

export default AlertDismissible;
