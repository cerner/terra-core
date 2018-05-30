import React from 'react';
import Base from 'terra-base';
import Field from '../../lib/Field';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const FieldLabelOptional = () => (
  <Base locale={locale}>
    <b>Field - Label + Optional</b>
    <Field
      id="label-optional"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      showOptional
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </Base>
);

export default FieldLabelOptional;
