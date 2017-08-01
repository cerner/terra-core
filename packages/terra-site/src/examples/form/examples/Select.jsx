// remove eslint-disable once terra-form has been published
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Select from 'terra-form/lib/Select';
/* eslint-enable import/no-extraneous-dependencies */

const SelectExamples = () => (
  <form>
    <Select
      choices={['wow', 'this', 'that']}
      name="zibby"
      defaultValue="snappers"
      required
    />
  </form>
);

export default SelectExamples;
