import React from 'react';
import NumberField from '../../src/NumberField';

it('should render a default component', () => {
  const input = <NumberField />;
  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render a NumberField when all the possible props are passed into it', () => {
  const input = (
    <NumberField
      label="Sales Tax Rate"
      labelAttrs={{ className: 'healtheintent-legend' }}
      name="sales_tax_rate"
      error="This field is required"
      help="Your county's office may have this information"
      max={1}
      min={0}
      step={0.1}
      inputAttrs={{ className: 'cernerConsumer-application' }}
      inputId="tax-rate"
      isInline
      required
    />);

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render as uncontrolled when just a numeric default value is passed into the NumberField', () => {
  const input = <NumberField defaultValue={2} />;
  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render as uncontrolled when just a string default value is passed into the NumberField', () => {
  const input = <NumberField defaultValue={'2'} />;
  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render as controlled when just a default value is passed into the NumberField', () => {
  const input = <NumberField value={2} onChange={() => {}} />;
  const wrapper = mount(input);
  expect(wrapper).toMatchSnapshot();
});
