// remove eslint-disable once terra-form has been published
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Field from 'terra-form/lib/Field';
import Fieldset from 'terra-form/lib/Fieldset';
import Input from 'terra-form/lib/Input';
/* eslint-enable import/no-extraneous-dependencies */

const FieldsetExamples = () => (
  <form>
    <Fieldset
      type="checkbox"
      legend="Give your full name here"
      name="children_present"
      value="children_present"
      error="All fields must be filled out"
      help="Families are eligible for family package plans"
      required
    >
      <Field
        label="First"
        isInline
        required
        htmlFor="test"
      >
        <Input id="test" type="text" name="first" defaultValue="" />
      </Field>
      <Field
        label="Middle"
        isInline
        required
      >
        <Input type="text" name="middle" defaultValue="" />
      </Field>
      <Field
        label="Last"
        isInline
        required
      >
        <Input type="text" name="last" defaultValue="" />
      </Field>
    </Fieldset>
  </form>
);

export default FieldsetExamples;
