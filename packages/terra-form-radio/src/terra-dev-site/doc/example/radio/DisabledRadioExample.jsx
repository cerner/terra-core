import React from 'react';
import Radio from 'terra-form-radio';

const disabledRadioExample = () => (
  <div>
    <Radio id="disabled-radio" labelText="Disabled Radio" disabled name="disabled" />
    <Radio id="disabled-checked-radio" labelText="Disabled and Checked Radio" defaultChecked disabled name="disabled" />
  </div>
);

export default disabledRadioExample;
