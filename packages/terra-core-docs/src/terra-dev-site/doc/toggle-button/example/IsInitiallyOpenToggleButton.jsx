import React from 'react';
import Radio from 'terra-form-radio';
import ToggleButton from 'terra-toggle-button';

const InitiallyToggleButton = () => (
  <ToggleButton closedButtonText="Patient Consent Form" isInitiallyOpen>
  <p>The Patient Consent Form includes a button for patients to provide their consent for medical procedures or treatments. It simplifies the process by allowing patients to indicate their approval or refusal easily. The form captures the consent status, ensuring compliance with legal and ethical requirements. This enhances the healthcare application's ability to manage patient consent accurately, promoting transparency and patient autonomy.
    <div>
    <Radio id="Yes" labelText="Yes" name="inline-example" isInline />
    <Radio id="No" labelText="No" name="inline-example" isInline />
    </div>
  </p> </ToggleButton>
);

export default InitiallyToggleButton;
