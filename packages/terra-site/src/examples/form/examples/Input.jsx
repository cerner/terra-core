// remove eslint-disable once terra-form has been published
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Input from 'terra-form/lib/Input';
/* eslint-enable import/no-extraneous-dependencies */

const InputExamples = () => (
  <form>
    <Input
      name="foo"
      defaultValue="bar"
    />
  </form>
);

export default InputExamples;
