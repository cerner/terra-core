import React from 'react';
import Field from 'terra-form/lib/Field';
import Input from 'terra-form/lib/Input';

const FieldExamples = () => (
  <form>
    <Field
      type="checkbox"
      label="Where do you work"
      name="work_location"
      value=""
      error="This field is required"
      help="We need to to verify if you work for a big or small company"
      required
    >
      <Input type="text" defaultValue="Element" />
    </Field>
  </form>
);

export default FieldExamples;
