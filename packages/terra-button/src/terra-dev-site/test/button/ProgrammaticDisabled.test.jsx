import React, { useState } from 'react';
import Button from '../../../Button';

const ProgrammaticDisabled = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <Button
      isDisabled={isDisabled}
      text={isDisabled ? 'Disabled' : 'Click to Disable'}
      id="programmaticDisabledButton"
      key="test-example-button"
      onClick={() => { setIsDisabled(!isDisabled); }}
    />
  );
};

export default ProgrammaticDisabled;
