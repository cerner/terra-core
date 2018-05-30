import React from 'react';
import Base from 'terra-base';
import Field from '../../lib/Field';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const FieldErrorText = () => (
  <Base locale={locale}>
    <b>Field - Error Text</b>
    <Field
      id="error-text"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      isLabelHidden
      error="Error Message"
      isInvalid
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </Base>
);

export default FieldErrorText;
