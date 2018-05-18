import React from 'react';

import Radio from '../../../../Radio';
import RadioField from '../../../../RadioField';

const RadioFieldExample = () => (
  <RadioField legend="Which Type of Meal are you looking for?">
    <Radio id="user-account" name="account" labelText="Base User" value="user" />
    <Radio id="team-account" name="account" labelText="Team Owner" value="team" />
    <Radio id="admin-account" name="account" labelText="Administrator" value="admin" />
  </RadioField>
);

export default RadioFieldExample;
