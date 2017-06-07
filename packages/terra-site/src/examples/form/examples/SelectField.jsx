// remove eslint-disable once terra-form has been published
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import SelectField from 'terra-form/lib/SelectField';
/* eslint-enable import/no-extraneous-dependencies */

const SelectFieldExamples = () => (
  <form>
    <SelectField
      choices={['Puppies', 'Kittens', 'Snappers', 'Bumblers', 'Joeys']}
      name="foo"
      value="Snappers"
      required
    />
  </form>
);

export default SelectFieldExamples;
