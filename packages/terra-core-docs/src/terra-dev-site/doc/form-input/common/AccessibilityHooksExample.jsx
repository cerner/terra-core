import React from 'react';
import Input from 'terra-form-input';


const AccessibilityHooksExample = () => (
    <div>
        <label htmlFor="input_id"> E-mail Label</label>
        <p style={{display: "none"}} id="input_id-help">Please enter a valid e-mail address</p>
        <p style={{display: "none"}} id="input_id-error">The e-mail address entered is invalid</p>
        <Input name="accessible input" id="input_id" aria-describedby="input_id-help input_id-error" ariaLabel="Blank" />
  </div>
    );

export default AccessibilityHooksExample;
