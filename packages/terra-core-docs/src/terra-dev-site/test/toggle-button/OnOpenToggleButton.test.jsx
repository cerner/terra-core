import React, { useState } from 'react';
import ToggleButton from 'terra-toggle-button';

const OnOpenToggleButton = () => {
  const [timesOpened, setTimesOpened] = useState(0);

  const handleOnOpen = () => {
    setTimesOpened(timesOpened + 1);
  };

  return (
    <div id="toggle-button-example">
      <div id="on-open-event">
        <h3>{`Times Opened: ${timesOpened}`}</h3>
      </div>
      <ToggleButton id="onOpenToggleButton" closedButtonText="ToggleButton" onOpen={handleOnOpen}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </ToggleButton>
    </div>
  );
};

export default OnOpenToggleButton;
