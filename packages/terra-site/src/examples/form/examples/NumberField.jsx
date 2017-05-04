import React from 'react';
import { NumberField } from 'terra-form';

const NumberFieldExamples = () => (
  <form>
    <NumberField
      label="Sales Tax Rate"
      name="sales_tax_rate"
      defaultValue={0.075}
      error="This field is required"
      help="Your county's office may have this information"
      required
      max={1}
      min={0}
      step={0.025}
      attrs={{ className: 'healtheintent-application' }}
      isInline
    />
  </form>
);

export default NumberFieldExamples;
