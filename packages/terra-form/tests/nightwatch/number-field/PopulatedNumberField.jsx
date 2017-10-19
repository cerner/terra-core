import React from 'react';
import Base from 'terra-base';
import NumberField from '../../../lib/NumberField';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const numberField = () => (
  <Base locale={locale}>
    <NumberField
      id="populated-number-field"
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
      isInline
    />
  </Base>
);

export default numberField;
