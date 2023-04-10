import React from 'react';
import Checkbox from 'terra-form-checkbox';

const longTextExample = () => (
  <Checkbox
    id="longTextCheckbox"
    labelText="Click to trigger the Checkbox. When activated, a check mark shall appear. Focus can be activated through tabbing and the checked state can be toggled with the space bar. Checkbox have one required prop which is labelText to add text of the label."
  />
);

export default longTextExample;
