import React from 'react';
import Base from 'terra-base';
import Field from '../../lib/Field';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const FieldExamples = () => (
  <Base locale={locale}>
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

    <h3>Field - Hidden Label</h3>
    <Field
      id="label-hidden"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      isLabelHidden
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>

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

    <h3>Field - Error Text</h3>
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

    <h3>Field - Label + In Error + Help Text</h3>
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

    <h3>Field -  Label + Required + In Error + Help Text</h3>
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

export default FieldExamples;
