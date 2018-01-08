import React from 'react';

import Radio from '../../src/Radio';

const radio = () => (
  <div role="group" aria-labelledby="mainLabel" >
    <div id="mainLabel" aria-label="Main Label" />
    <Radio id="first" labelText="First Radio" name="multiple" defaultChecked />
    <Radio id="second" labelText="Second Radio" name="multiple" />
    <Radio id="third" labelText="Third Radio" name="multiple" />
  </div>
);

export default radio;
