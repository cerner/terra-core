import React from 'react';
import ToggleButton from 'terra-toggle-button';

const OpenCloseTextToggleButton = () => (
  <ToggleButton
    closedButtonText="Close Toggle Button Text"
    openedButtonText="Opened Toggle Button Text"
    isAnimated
  >
    <div>
      <p>
        This is a ToggleButton component with open and close functionality. When the button is closed, the text "Close Toggle Button Text" will be displayed. When the button is opened, the text "Opened Toggle Button Text" will be displayed.
      </p>
      <p>
        To use this ToggleButton user can customize the 'closedButtonText' and 'openedButtonText' props according to your desired text. User can adjust the 'isAnimated' prop to enable or disable the animation when toggling the button.
      </p>
    </div>
  </ToggleButton>
);

export default OpenCloseTextToggleButton;

