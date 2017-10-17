import React from 'react';

import Field from '../../../src/Field';

const FieldExamples = () => (
  <div>
    <Field
      id="label"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      isInline
      required
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>

    <Field
      id="label"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      isInline
      showOptional
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>

    <Field
      id="label-optional"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      isInline
      required
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </div>
 );

export default FieldExamples;
