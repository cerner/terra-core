import React from 'react';
import ToggleButton from 'terra-toggle-button';

const OpenCloseTextToggleButton = () => (
  <ToggleButton closedButtonText="Information about RTHS" openedButtonText="Information about RTHS" isAnimated>
    <p>A real-time health system (RTHS) is a health delivery organization that leverages the use of near real-time data from many sources to help improve clinical, operational, and financial efficiency and effectiveness, and improve patient engagement in a safe and secure manner.</p>
    <p>Cerner can help you integrate data throughout the network and within the health system, driving predictable and operational excellence with contextual awareness.</p>
  </ToggleButton>
);

export default OpenCloseTextToggleButton;
