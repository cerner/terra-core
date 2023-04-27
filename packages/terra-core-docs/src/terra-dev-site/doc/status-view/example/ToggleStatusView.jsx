import React from 'react';
import StatusView from 'terra-status-view';
import ToggleButton from 'terra-toggle-button';

const ToggleStatusView = () => (
  <ToggleButton closedButtonText="Trigger Error">
    <StatusView
      message="run time error"
      variant="error"
    />
  </ToggleButton>
);

export default ToggleStatusView;
