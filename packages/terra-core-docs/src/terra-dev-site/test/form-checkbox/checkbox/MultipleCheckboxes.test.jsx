import React from 'react';
import Checkbox from 'terra-form-checkbox';

const checkbox = () => (
  <div>
    <Checkbox id="first" labelText="First Checkbox" defaultChecked />
    <Checkbox id="second" labelText="Second Checkbox" />
    <Checkbox id="third" labelText="Third Checkbox" />
  </div>
);

export default checkbox;
