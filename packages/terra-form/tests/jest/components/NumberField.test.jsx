/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import NumberField from '../../../src/components/NumberField';

it('should render a default component', () => {
  const input = <NumberField />;
  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render a NumberField with the rest of the props', () => {
  const input = (
    <NumberField
      label="Sales Tax Rate"
      name="sales_tax_rate"
      value={0.075}
      error="This field is required"
      help="Your county's office may have this information"
      required={true}
      max={1}
      min={0}
      step={0.1}
    />);

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});
