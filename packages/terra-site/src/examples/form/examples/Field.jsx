import React from 'react';
import { Field } from 'terra-form';

const FieldExamples = () => (
  <form>
    <Field
      type="checkbox"
      label="Do you have any Children?"
      name="children_present"
      value="children_present"
      error="This field is required"
      help="Families are eligible for family package plans"
      required
    />
  </form>
);

export default FieldExamples;
