import React from 'react';

import ToggleButton from '../../lib/ToggleButton';

const InitiallyOpenToggleButton = () => (
  <ToggleButton closedButtonText="Custom Text" isInitiallyOpen>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </ToggleButton>
);

export default InitiallyOpenToggleButton;
