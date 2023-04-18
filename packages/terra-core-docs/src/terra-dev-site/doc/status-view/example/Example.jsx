import React from 'react';
import StatusView from 'terra-status-view';
import ToggleButton from 'terra-toggle-button';

const Example = () => (
  <ToggleButton closedButtonText="ToggleButton">
    <StatusView
      role="alert"
      message="Cerner can help you integrate data throughout the network and within the health system, driving predictable and operational excellence with contextual awareness."
      variant="no-data"
    />
  </ToggleButton>
);

export default Example;
