import React from 'react';

import Field from '../../../src/Field';

const FieldExamples = () => (
  <div>
    <h3>Field - Default</h3>
    <Field
      id="label"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>

    <h3>Field - Label</h3>
    <Field
      id="label"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>

    <h3>Field - Label + Optional</h3>
    <Field
      id="label-optional"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      showOptional
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>

    <h3>Field - Label + Required</h3>
    <Field
      id="label-required"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      required
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>

    <h3>Field - Help Text</h3>
    <Field
      id="label-required"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      help="Help Message"
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>

    <h3>Field - Error Text</h3>
    <Field
      id="label-required"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      error="Error Message"
      inError
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>

    <h3>Field - Label + In Error + Help Text</h3>
    <Field
      id="label-required"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      help="Help Message"
      error="Error Message"
      inError
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>

    <h3>Field -  Label + Required + In Error + Help Text</h3>
    <Field
      id="label-required"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      help="Help Message"
      error="Error Message"
      inError
      required
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </div>
 );

export default FieldExamples;
