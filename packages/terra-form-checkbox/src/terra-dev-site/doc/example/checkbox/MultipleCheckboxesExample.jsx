import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Checkbox from 'terra-form-checkbox/lib/Checkbox';

const multipleCheckboxesExample = () => (
  <div>
    <Checkbox id="first" labelText="First Checkbox" defaultChecked />
    <Checkbox id="second" labelText="Second Checkbox" />
    <Checkbox id="third" labelText="Third Checkbox" />
  </div>
);

export default multipleCheckboxesExample;
