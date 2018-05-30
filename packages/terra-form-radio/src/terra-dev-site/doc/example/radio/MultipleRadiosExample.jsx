import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Radio from 'terra-form-radio/lib/Radio';

const multipleRadiosExample = () => (
  <div>
    <Radio id="first" labelText="First Radio" name="multiple-group" defaultChecked />
    <Radio id="second" labelText="Second Radio" name="multiple-group" />
    <Radio id="third" labelText="Third Radio" name="multiple-group" />
  </div>
);

export default multipleRadiosExample;
