import React from 'react';
import Base from 'terra-base';
import SelectField from '../../../lib/SelectField';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const selectfield = () => (
  <Base locale={locale}>
    <SelectField
      id="populated-select-field"
      options={[{ value: 'm', display: 'moo' }, { value: 'b', display: 'boo' }]}
      defaultValue="b"
      error="jinkies!"
      isInline
      label="Meddling Kids"
      labelAttrs={{ className: 'mystery-van' }}
      help="solve the mystery"
      name="zounds"
      required
      selectAttrs={{ className: 'scooby-snacks' }}
    />
  </Base>
);

export default selectfield;
