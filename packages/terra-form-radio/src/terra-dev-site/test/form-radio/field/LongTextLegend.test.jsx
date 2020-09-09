import React from 'react';
import Radio from '../../../../Radio';
import RadioField from '../../../../RadioField';

const LongTextLegend = () => (
  <RadioField
    id="testing-radio-field"
    legend="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    help="Help Message"
    error="One must be selected"
  >
    <Radio id="default" labelText="Default Radio" />
  </RadioField>
);

export default LongTextLegend;
