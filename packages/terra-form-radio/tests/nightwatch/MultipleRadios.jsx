import React from 'react';

import Radio from '../../src/Radio';

const radio = () => (
  <div>
    <Radio id="first" labelText="First Radio" name="multiple" defaultChecked />
    <Radio id="second" labelText="Second Radio" name="multiple" />
    <Radio id="third" labelText="Third Radio" name="multiple" />
  </div>
);

export default radio;
