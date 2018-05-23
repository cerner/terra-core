import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Radio from 'terra-form-radio/lib/Radio';

const inlineRadiosExample = () => (
  <div>
    <Radio id="first-inline" labelText="First Radio" name="inline-example" isInline />
    <Radio id="second-inline" labelText="Second Radio" name="inline-example" isInline />
    <Radio id="third-inline" labelText="Third Radio" name="inline-example" isInline />
  </div>
);

export default inlineRadiosExample;
