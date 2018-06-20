import React from 'react';
import Field from '../../../Field';

const FieldHelpText = () => (
  <div>
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
  </div>
);

export default FieldHelpText;
