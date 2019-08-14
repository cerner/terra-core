import React from 'react';
import Checkbox from 'terra-form-checkbox';

const disabledCheckbox = () => (
  <div>
    <Checkbox id="disabledCheckbox" labelText="Disabled Checkbox" disabled />
    <Checkbox id="disabledcheckedCheckbox" labelText="Disabled and Checked Checkbox" defaultChecked disabled />
  </div>
);

export default disabledCheckbox;
