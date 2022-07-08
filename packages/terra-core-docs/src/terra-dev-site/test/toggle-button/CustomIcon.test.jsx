import React from 'react';
import IconCaretRight from 'terra-icon/lib/icon/decorative/IconCaretRight';
import ToggleButton from 'terra-toggle-button';

const CustomIconToggleButton = () => (
  <ToggleButton closedButtonText="ToggleButton" icon={<IconCaretRight id="custom-icon" />}>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </ToggleButton>
);

export default CustomIconToggleButton;
