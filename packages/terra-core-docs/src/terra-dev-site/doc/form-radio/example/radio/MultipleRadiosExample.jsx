import React from 'react';
import Radio from 'terra-form-radio';

const multipleRadiosExample = () => (
  <div>
    <Radio id="first" labelText="First Radio" name="multiple-group" defaultChecked />
    <Radio id="second" labelText="Second Radio" name="multiple-group" />
    <Radio id="third" labelText="Third Radio" name="multiple-group" />
  </div>
);

export default multipleRadiosExample;
