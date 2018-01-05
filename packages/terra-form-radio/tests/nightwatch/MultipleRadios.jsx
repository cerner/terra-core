import React from 'react';

import Radio from '../../src/Radio';

const radio = () => (
  <div role="group" id="mainLabel">
    <Radio id="first" labelText="First Radio" name="multiple" defaultChecked aria-labelledby=".mainLabel" />
    <Radio id="second" labelText="Second Radio" name="multiple" aria-labelledby=".mainLabel" />
    <Radio id="third" labelText="Third Radio" name="multiple" aria-labelledby=".mainLabel" />
  </div>
);

export default radio;
