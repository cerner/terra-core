import React from 'react';
import Base from 'terra-base';
import Field from '../../lib/Field';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const FieldExamples = () => (
  <Base locale={locale}>
    <Field
      id="inline-1"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      isInline
      required
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>

    <Field
      id="inline-2"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      isInline
      showOptional
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>

    <Field
      id="inline-3"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      isInline
      required
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </Base>
 );

export default FieldExamples;
