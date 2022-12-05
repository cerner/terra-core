import React from 'react';
import Input from 'terra-form-input';


const AccessibilityHooksExample = () => (
    <div>
        <label htmlFor="input_id"> Field Label </label>
        <p style={{display: "none"}} id="input_id-help">This is help text with accessibility hooks.</p>
        <p style={{display: "none"}} id="input_id-error">This is error text with accessibility hooks.</p>
        <Input name="accessible input" id="input_id" aria-describedby="input_id-help input_id-error" ariaLabel="Blank" />
  </div>
    );

export default AccessibilityHooksExample;
