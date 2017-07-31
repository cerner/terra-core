import React from 'react';

import SelectField from '../../../lib/SelectField';

const selectfield = () => (
  <SelectField
    id="populated-select-field"
    choices={['moo', 'boo']}
    defaultValue="boo"
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
