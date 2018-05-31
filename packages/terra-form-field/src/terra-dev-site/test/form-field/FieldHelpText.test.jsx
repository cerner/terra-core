import React from 'react';
import Base from 'terra-base';
import Field from '../../../Field';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const FieldHelpText = () => (
  <Base locale={locale}>
    <h3>Field - Help Text</h3>
    <Field
      id="help-text"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      isLabelHidden
      help="Help Message"
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </Base>
);

export default FieldHelpText;
