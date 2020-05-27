import React, { useState } from 'react';
import ButtonGroup from '../../../ButtonGroup';

const ProgrammaticDisabled = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <ButtonGroup id="programmaticDisabledButtonGroup">
      <ButtonGroup.Button
        isDisabled={isDisabled}
        text={isDisabled ? 'Disabled' : 'Click to Disable'}
        id="programmaticDisabledButton"
        key="test-example-button"
        onClick={() => { setIsDisabled(!isDisabled); }}
      />
    </ButtonGroup>
  );
};

export default ProgrammaticDisabled;
