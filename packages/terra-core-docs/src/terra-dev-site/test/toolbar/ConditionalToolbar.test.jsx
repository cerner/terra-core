import React, { useState } from 'react';
import Button from 'terra-button';
import Toolbar from 'terra-toolbar';

const ConditionalToolbar = () => {
  const [showButton, setShowButton] = useState(true);

  return (
    <Toolbar>
      {showButton ? <Button text="Button 1" /> : null}
      <Button
        text="Button 2"
        id="button-2"
        onClick={() => {
          setShowButton(!showButton);
        }}
      />
    </Toolbar>
  );
};

export default ConditionalToolbar;
