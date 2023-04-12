import React from 'react';
import Radio from 'terra-form-radio';

const multipleRadiosExample = () => (
  <div>
    <Radio id="baseUser" labelText="Base User" name="multiple-group" defaultChecked />
    <Radio id="teamOwner" labelText="Team Owner" name="multiple-group" />
    <Radio id="administrator" labelText="Administrator" name="multiple-group" />
  </div>
);

export default multipleRadiosExample;
