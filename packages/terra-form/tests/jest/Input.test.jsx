import React from 'react';
import Input from '../../src/Input';

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
      <Input type="text" name="foo" value={this.state.name} onChange={this.updateName} />
    );
  }
}

it('should render a default component', () => {
  const input = (<Input />);
  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render a Input with the rest of the props', () => {
  const input = (
    <Input
      required
      name="foo"
      value="bar"
    />);

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render as uncontrolled when just a default value is passed into the function', () => {
  const input = (
    <Input
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

it('should render as controlled when just a default value is passed into the function', () => {
  const input = <ControlledInput />;

  const wrapper = mount(input);
  const inputElement = wrapper.find('[name="foo"]');

  // Since we are attaching the value to the state, using normal JS DOM interactions should
  // not update the value, but simulating the onChange behavior should.
  inputElement.simulate('change', { target: { value: 'Jill' } });
  inputElement.at(0).nodes.value = 'Johnny';

  expect(inputElement.at(0).node.value).toEqual('Jill');
});
