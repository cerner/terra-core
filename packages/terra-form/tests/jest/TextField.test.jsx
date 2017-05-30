import React from 'react';
import TextField from '../../src/TextField';

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'John' };
    this.updateName = this.updateName.bind(this);
  }

  updateName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    return (
      <TextField type="text" name="foo" value={this.state.name} onChange={this.updateName} />
    );
  }
}

it('should render a default TextField component', () => {
  const input = (<TextField />);
  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render a TextField with the rest of the props', () => {
  const input = (
    <TextField
      type="email"
      label="Email Address"
      name="email"
      value=""
      error="This field is required"
      help="This will not be shared with outside sources"
      inputAttrs={{ className: 'healtheintent-application' }}
      minLength={8}
      maxLength={75}
      required
    />);

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render as uncontrolled when just a default value is passed into the TextField', () => {
  const input = (
    <TextField
      name="foo"
      defaultValue="foo"
    />
  );

  const wrapper = mount(input);
  const inputElement = wrapper.find('[name="foo"]');

  // Since we are not attaching the value to the state, simulating onChange should not update
  // the input, but actually setting it through normal DOM manipulations should.
  inputElement.simulate('change', { target: { value: 'Jill' } });
  inputElement.at(0).node.value = 'Johnny';

  expect(inputElement.at(0).node.value).toEqual('Johnny');
});

it('should render as controlled when just a default value is passed into the TextField', () => {
  const input = <ControlledInput />;

  const wrapper = mount(input);
  const inputElement = wrapper.find('[name="foo"]');

  // Since we are attaching the value to the state, using normal JS DOM interactions should
  // not update the value, but simulating the onChange behavior should.
  inputElement.simulate('change', { target: { value: 'Jill' } });
  inputElement.at(0).nodes.value = 'Johnny';

  expect(inputElement.at(0).node.value).toEqual('Jill');
});
