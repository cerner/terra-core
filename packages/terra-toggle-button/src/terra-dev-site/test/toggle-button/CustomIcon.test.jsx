import React from 'react';
import IconCaretRight from 'terra-icon/lib/icon/IconCaretRight';
import ToggleButton from '../../lib/ToggleButton';

const CustomIconToggleButton = () => (
  <ToggleButton closedButtonText="ToggleButton" icon={<IconCaretRight id="custom-icon" />}>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </ToggleButton>
);

export default CustomIconToggleButton;
