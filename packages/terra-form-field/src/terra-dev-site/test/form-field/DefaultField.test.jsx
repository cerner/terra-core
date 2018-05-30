import React from 'react';
import Base from 'terra-base';
import Field from '../../../../lib/Field';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const DefaultField = () => (
  <Base locale={locale}>
    <h3> Default Field</h3>
    <Field
      label="Field Label"
      help="This is a standard, non-required field."
      error="Error Message"
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
    <Field
      label="Field Label"
      help="This is a standard, non-required field."
      error="Error Message"
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </Base>
);

export default DefaultField;
