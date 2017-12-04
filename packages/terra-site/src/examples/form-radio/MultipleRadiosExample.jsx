import React from 'react';

import Radio from 'terra-form-radio/src/Radio';

const multipleRadiosExample = () => (
  <div>
    <Radio id="first" labelText="First Radio" name="multipleGroup" defaultChecked />
    <Radio id="second" labelText="Second Radio" name="multipleGroup" />
    <Radio id="third" labelText="Third Radio" name="multipleGroup" />
  </div>
);

export default multipleRadiosExample;
