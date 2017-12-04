import React from 'react';

import Radio from 'terra-form-radio/src/Radio';

const inlineRadiosExample = () => (
  <div>
    <Radio id="firstInline" labelText="First Radio" name="inlineExample" isInline isDisabled />
    <Radio id="secondInline" labelText="Second Radio" name="inlineExample" isInline />
    <Radio id="thirdInline" labelText="Third Radio" name="inlineExample" isInline />
  </div>
);

export default inlineRadiosExample;
