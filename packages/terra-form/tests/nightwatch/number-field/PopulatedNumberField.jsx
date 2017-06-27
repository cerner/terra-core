import React from 'react';

import NumberField from '../../../lib/NumberField';

const numberField = () =>
  <NumberField
    label="Sales Tax Rate"
    name="sales_tax_rate"
    defaultValue={0.075}
    error="This field is required"
    help="Your county's office may have this information"
    required
    max={1}
    min={0}
    step={0.1}
    inputAttrs={{ className: 'healtheintent-application' }}
    id="tax-rate"
    isInline
  />;

export default numberField;
