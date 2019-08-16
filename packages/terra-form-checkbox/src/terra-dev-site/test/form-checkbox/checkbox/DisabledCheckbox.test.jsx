import React from 'react';
import Checkbox from '../../../../Checkbox';

const checkbox = () => (
  <div>
    <Checkbox id="disabled" labelText="Disabled Checkbox" disabled />
    <Checkbox id="disabledchecked" labelText="Disabled and Checked Checkbox" defaultChecked disabled />
  </div>
);

export default checkbox;
