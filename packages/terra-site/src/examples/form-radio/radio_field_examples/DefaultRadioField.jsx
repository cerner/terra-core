import React from 'react';

import Radio from 'terra-form-radio/lib/Radio';
import RadioField from 'terra-form-radio/lib/RadioField';

const RadioFieldExample = () => (
  <RadioField legend="Which Type of Meal are you looking for?">
    <Radio id="user-account" name="account" labelText="Base User" value="user" />
    <Radio id="team-account" name="account" labelText="Team Owner" value="team" />
    <Radio id="admin-account" name="account" labelText="Administrator" value="admin" />
  </RadioField>
);

export default RadioFieldExample;
