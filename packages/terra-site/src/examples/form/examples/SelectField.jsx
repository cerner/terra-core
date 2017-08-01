// remove eslint-disable once terra-form has been published
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import SelectField from 'terra-form/lib/SelectField';
/* eslint-enable import/no-extraneous-dependencies */

const SelectFieldExamples = () => (
  <form>
    <SelectField
      options={[{ value: 'puppies', display: 'Puppies' },
                { value: 'kittens', display: 'Kittens' },
                { value: 'snappers', display: 'Snappers' },
                { value: 'bumblers', display: 'Bumblers' },
                { value: 'joeys', display: 'Joeys' },
                { value: 'micros', display: 'Microprocessors' }]}
      help="TO DETERMINE IF YOU ARE A HUMAN, PLEASE PICK YOUR FAVORITE SMALL ANIMAL"
      label="Human Test"
      name="zibby"
      defaultValue="snappers"
      required
    />
  </form>
);

export default SelectFieldExamples;
