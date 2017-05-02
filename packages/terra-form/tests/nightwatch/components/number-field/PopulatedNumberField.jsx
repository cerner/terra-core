import React from 'react';

import NumberField from '../../../../lib/components/NumberField';

const numberField = () => (
  <NumberField
    label="Sales Tax Rate"
    name="sales_tax_rate"
    value={0.075}
    error="This field is required"
    help="Your county's office may have this information"
    required
    max={1}
    min={0}
    step={0.1}
    attrs={{ className: 'healtheintent-application' }}
    isInline
  />
);

export default numberField;
