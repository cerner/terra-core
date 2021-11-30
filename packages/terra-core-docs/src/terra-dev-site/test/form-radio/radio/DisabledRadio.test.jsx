import React from 'react';
import Radio from 'terra-form-radio';

export default () => (
  <div>
    <Radio id="disabled" labelText="Disabled Radio" disabled />
    <Radio id="disabledchecked" labelText="Disabled and Checked Radio" defaultChecked disabled />
  </div>
);
