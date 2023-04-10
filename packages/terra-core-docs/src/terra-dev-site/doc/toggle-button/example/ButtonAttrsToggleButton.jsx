import React from 'react';
import Button from 'terra-button';
import ToggleButton from 'terra-toggle-button';

const ButtonAttrsToggleButton = () => (
  <ToggleButton
    closedButtonText="Button Emphasis ToggleButton"
    buttonAttrs={{
      variant: Button.Opts.Variants.EMPHASIS,
    }}
  >
    <p>CommonWell Health Alliance, integrated with the Cerner clinical EHR platform, facilitates nationwide interoperability. CommonWell provides infrastructure to help identify patients as they transition through care facilities; locate health records regardless of where care occurred; and retrieve relevant care documents in an efficient manner.</p>
  </ToggleButton>
);

export default ButtonAttrsToggleButton;
