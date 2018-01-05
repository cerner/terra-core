import React from 'react';

import Checkbox from '../../src/Checkbox';

const checkbox = () => (
  <div role="group" aria-labelledby="groupLabel" >
    <Checkbox id="first" labelText="First Checkbox" defaultChecked />
    <Checkbox id="second" labelText="Second Checkbox" />
    <Checkbox id="third" labelText="Third Checkbox" />
  </div>
);

export default checkbox;
