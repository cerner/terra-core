import React from 'react';
import Base from 'terra-base';
import Field from '../../lib/Field';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const FieldLabelErrorHelpText = () => (
  <Base locale={locale}>
    <b>Field - Label + In Error + Help Text</b>
    <Field
      id="optional-invalid"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      help="Help Message"
      error="Error Message"
      isInvalid
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </Base>
);

export default FieldLabelErrorHelpText;
