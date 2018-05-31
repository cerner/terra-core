import React from 'react';
import Base from 'terra-base';
import Field from '../../../Field';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const FieldExamples = () => (
  <Base locale={locale}>
    <Field
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      isInline
      required
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>

    <Field
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      isInline
      showOptional
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>

    <Field
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      isInline
      required
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
    <br />
    <Field
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      isInline
      error="Error Message"
      isInvalid
      required
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>

    <Field
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      isInline
      error="Error Message"
      isInvalid
      showOptional
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>

    <Field
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      isInline
      error="Error Message"
      isInvalid
      required
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </Base>
 );

export default FieldExamples;
