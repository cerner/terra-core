import React from 'react';
import StatusView from 'terra-status-view';
import ToggleButton from 'terra-toggle-button';

const Example = () => (
  <ToggleButton closedButtonText="ToggleButton">
    <StatusView
      role="alert"
      aria-live="polite"
      message="Testing"
      variant="no-data"
    />
  </ToggleButton>
);

export default Example;
