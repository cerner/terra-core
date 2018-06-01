import React from 'react';
import Base from 'terra-base';
import Field from '../../../Field';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const FieldLabel = () => (
  <Base locale={locale}>
    <h3>Field - Label</h3>
    <Field
      id="label"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </Base>
);

export default FieldLabel;
