import React from 'react';
import Base from 'terra-base';
import Field from '../../lib/Field';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const FieldLabelRequiredErrorHelpText = () => (
  <Base locale={locale}>
    <b>Field -  Label + Required + In Error + Help Text</b>
    <Field
      id="required-invalid"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      help="Help Message"
      error="Error Message"
      isInvalid
      required
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </Base>
);

export default FieldLabelRequiredErrorHelpText;
