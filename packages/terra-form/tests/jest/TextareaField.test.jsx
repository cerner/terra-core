import React from 'react';
import TextareaField from '../../src/TextareaField';

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
      <TextareaField type="text" name="foo" value={this.state.name} onChange={this.updateName} />
    );
  }
}

it('should render a default TextAreaField component', () => {
  const textarea = <TextareaField />;
  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a TextAreaField with the rest of the props', () => {
  const textarea = (
    <TextareaField
      label="Profile Description"
      name="profile_description"
      error="Name is required"
      help="The name given to you at birth."
      maxLength={15}
      minLength={5}
      inputAttrs={{ autoFocus: false }}
      required
    />);

  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render as uncontrolled when just a default value is passed into the TextareaField', () => {
  const textarea = (
    <TextareaField
      name="foo"
      defaultValue="foo"
    />
  );

  const wrapper = mount(textarea);
  const textareaElement = wrapper.find('[name="foo"]');

  // Since we are not attaching the value to the state, simulating onChange should not update
  // the input, but actually setting it through normal DOM manipulations should.
  textareaElement.simulate('change', { target: { value: 'Jill' } });
  textareaElement.at(0).node.value = 'Johnny';

  expect(textareaElement.at(0).node.value).toEqual('Johnny');
});

it('should render as controlled when just a default value is passed into the TextareaField', () => {
  const textarea = <ControlledInput />;

  const wrapper = mount(textarea);
  const textareaElement = wrapper.find('[name="foo"]');

  // Since we are attaching the value to the state, using normal JS DOM interactions should
  // not update the value, but simulating the onChange behavior should.
  textareaElement.simulate('change', { target: { value: 'Jill' } });
  textareaElement.at(0).nodes.value = 'Johnny';

  expect(textareaElement.at(0).node.value).toEqual('Jill');
});
