import React, { useState } from 'react';
import Input from 'terra-form-input';

const AccessibilityHooksExample = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const toggleErrorState = () => {
    setIsInvalid(!isInvalid);
  };

  return (
    <div>
      <label htmlFor="input_id"> E-mail Label</label>
      <Input name="accessible input" id="input_id" aria-describedby="input_id-error input_id-help" ariaLabel="Blank" />
      {(isInvalid) && (
      <p id="input_id-error">
        <font color="red">
          The e-mail address entered is invalid.
        </font>
      </p>
      )}
      <p id="input_id-help">Please enter a valid e-mail address.</p>
      <button type="button" id="toggle-is-invalid" onClick={toggleErrorState}>Toggle Error State</button>
    </div>
  );
};

export default AccessibilityHooksExample;
