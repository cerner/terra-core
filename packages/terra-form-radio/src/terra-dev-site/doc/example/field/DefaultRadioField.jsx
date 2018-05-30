import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Radio from 'terra-form-radio/lib/Radio';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import RadioField from 'terra-form-radio/lib/RadioField';

const RadioFieldExample = () => (
  <RadioField legend="Which Type of Meal are you looking for?">
    <Radio id="user-account" name="account" labelText="Base User" value="user" />
    <Radio id="team-account" name="account" labelText="Team Owner" value="team" />
    <Radio id="admin-account" name="account" labelText="Administrator" value="admin" />
  </RadioField>
);

export default RadioFieldExample;
