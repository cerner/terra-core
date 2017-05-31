import React from 'react';
import NumberField from '../../src/NumberField';

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
      max={1}
      min={0}
      step={0.1}
      inputAttrs={{ className: 'cernerConsumer-application' }}
      required
    />);

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render as uncontrolled when just a default value is passed into the NumberField', () => {
  const input = (
    <NumberField
      name="years_experience"
      defaultValue={2}
    />
  );

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render as controlled when just a default value is passed into the NumberField', () => {
  const input = (
    <NumberField
      name="years_experience"
      value={2}
      onChange={() => {}}
    />
  );

  const wrapper = mount(input);
  expect(wrapper).toMatchSnapshot();
});
