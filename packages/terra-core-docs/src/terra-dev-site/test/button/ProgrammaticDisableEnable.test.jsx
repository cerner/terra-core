import React, { useState } from 'react';
import Button from 'terra-button';

const ProgrammaticDisableEnable = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      <Button
        isDisabled={isDisabled}
        text={isDisabled ? 'Disabled' : 'Click to Disable'}
        id="programmaticDisabledButton1"
        key="test-example-button-1"
        onClick={() => { setIsDisabled(!isDisabled); }}
      />
      <Button
        text={isDisabled ? 'Click to Enable' : 'Click to Disable'}
        id="programmaticDisabledButton2"
        key="test-example-button-2"
        onClick={() => { setIsDisabled(!isDisabled); }}
      />
    </div>
  );
};

export default ProgrammaticDisableEnable;
