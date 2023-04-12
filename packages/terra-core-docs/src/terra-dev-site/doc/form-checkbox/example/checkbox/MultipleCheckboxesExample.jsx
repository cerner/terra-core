import React from 'react';
import Checkbox from 'terra-form-checkbox';

const multipleCheckboxesExample = () => (
  <div>
    <Checkbox id="ie9" labelText="IE9" defaultChecked />
    <Checkbox id="flash" labelText="Flash" />
    <Checkbox id="punchCards" labelText="Punch Cards" />
  </div>
);

export default multipleCheckboxesExample;
