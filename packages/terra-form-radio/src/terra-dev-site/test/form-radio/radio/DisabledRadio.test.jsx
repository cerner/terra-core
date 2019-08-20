import React from 'react';
import Radio from '../../../../Radio';

export default () => (
  <div>
    <Radio id="disabled" labelText="Disabled Radio" disabled />
    <Radio id="disabledchecked" labelText="Disabled and Checked Radio" defaultChecked disabled />
  </div>
);
