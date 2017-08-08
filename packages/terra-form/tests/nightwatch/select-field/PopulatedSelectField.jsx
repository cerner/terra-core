import React from 'react';

import SelectField from '../../../lib/SelectField';

const selectfield = () => (
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
);

export default selectfield;
