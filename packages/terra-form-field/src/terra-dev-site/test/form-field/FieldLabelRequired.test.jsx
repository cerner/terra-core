import React from 'react';
import Base from 'terra-base';
import Field from '../../lib/Field';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const FieldLabelRequired = () => (
  <Base locale={locale}>
    <b>Field - Label + Required</b>
    <Field
      id="label-required"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      required
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </Base>
);

export default FieldLabelRequired;
