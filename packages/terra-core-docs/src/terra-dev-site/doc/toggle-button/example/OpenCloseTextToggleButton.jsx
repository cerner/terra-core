import React from 'react';
import ToggleButton from 'terra-toggle-button';

const OpenCloseTextToggleButton = () => (
  <ToggleButton
    closedButtonText="Close Toggle Text"
    openedButtonText="Opened Toggle Text"
    isAnimated
  >
    <div>
      <p>
        This is a ToggleButton component with open and close functionality. When the button is closed, the text  &quot; Close Toggle Button Text &ldquo; will be displayed. When the button is opened, the text &quot;Opened Toggle Button Text&ldquo; will be displayed.
      </p>
      <p>
        To use this ToggleButton user can customize the &quot;closedButtonText&ldquo; and &quot;openedButtonText&ldquo; props according to your desired text. User can adjust the &quot;isAnimated&ldquo; prop to enable or disable the animation when toggling the button.
      </p>
    </div>
  </ToggleButton>
);

export default OpenCloseTextToggleButton;

