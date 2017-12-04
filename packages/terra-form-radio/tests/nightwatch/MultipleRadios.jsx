import React from 'react';

import Radio from '../../src/Radio';

const radio = () => (
  <div>
    <Radio id="first" labelText="First Radio" defaultChecked />
    <Radio id="second" labelText="Second Radio" />
    <Radio id="third" labelText="Third Radio" />
  </div>
);

export default radio;
