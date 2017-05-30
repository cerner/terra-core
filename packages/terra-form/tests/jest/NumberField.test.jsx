import React from 'react';
import NumberField from '../../src/NumberField';

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { years_experience: 2 };
    this.updateYearsExperience = this.updateYearsExperience.bind(this);
  }

  updateYearsExperience(e) {
    this.setState({
      years_experience: e.target.value,
    });
  }

  render() {
    return (
      <NumberField name="years_experience" value={this.state.years_experience} onChange={this.updateYearsExperience} />
    );
  }
}

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

  const wrapper = mount(input);
  const inputElement = wrapper.find('[name="years_experience"]');

  // Since we are not attaching the value to the state, simulating onChange should not update
  // the input, but actually setting it through normal DOM manipulations should.
  inputElement.simulate('change', { target: { value: 5 } });
  inputElement.at(0).node.value = 10;

  expect(inputElement.at(0).node.value).toEqual('10');
});

it('should render as controlled when just a default value is passed into the NumberField', () => {
  const input = <ControlledInput />;

  const wrapper = mount(input);
  const inputElement = wrapper.find('[name="years_experience"]');

  // Since we are attaching the value to the state, using normal JS DOM interactions should
  // not update the value, but simulating the onChange behavior should.
  inputElement.simulate('change', { target: { value: 5 } });
  inputElement.at(0).nodes.value = 10;

  expect(inputElement.at(0).node.value).toEqual('5');
});
