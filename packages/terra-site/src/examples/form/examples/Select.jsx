// remove eslint-disable once terra-form has been published
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Select from 'terra-form/lib/Select';
/* eslint-enable import/no-extraneous-dependencies */

const SelectExamples = () => (
  <form>
    <Select
      choices={[{ value: 'puppies', display: 'Puppies' },
                { value: 'kittens', display: 'Kittens' },
                { value: 'snappers', display: 'Snappers' },
                { value: 'bumblers', display: 'Bumblers' },
                { value: 'joeys', display: 'Joeys' },
                { value: 'micros', display: 'Microprocessors' }]}
      name="zibby"
      defaultValue="snappers"
      required
    />
  </form>
);

export default SelectExamples;
