import React, { useState } from 'react';
import ToggleButton from 'terra-toggle-button';

const OnCloseToggleButton = () => {
  const [timesClosed, setTimesClosed] = useState(0);

  const handleOnClose = () => {
    setTimesClosed(timesClosed + 1);
  };

  return (
    <div id="toggle-button-example">
      <div id="on-close-event">
        <h3>{`Times Closed: ${timesClosed}`}</h3>
      </div>
      <ToggleButton id="onCloseToggleButton" closedButtonText="ToggleButton" onClose={handleOnClose}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </ToggleButton>
    </div>
  );
};

export default OnCloseToggleButton;
