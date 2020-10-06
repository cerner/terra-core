import React from 'react';
import Checkbox from '../../../../Checkbox';
import CheckboxField from '../../../../CheckboxField';

const LongTextLegend = () => (
  <CheckboxField
    id="testing-checkbox-field"
    legend="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    help="Help Message"
  >
    <Checkbox id="default" labelText="Default Checkbox" />
  </CheckboxField>
);

export default LongTextLegend;
