import React from 'react';
import Textarea from '../../src/Textarea';

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
      <Textarea type="text" name="foo" value={this.state.name} onChange={this.updateName} />
    );
  }
}

it('should render a default TextArea component', () => {
  const textarea = <Textarea />;
  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a TextArea with the rest of the props', () => {
  const textarea = (
    <Textarea
      name="description"
      cols={15}
      rows={5}
      value="I'm a software engineer working at Cerner"
      required
    />);

  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render as uncontrolled when just a default value is passed into the Textarea', () => {
  const textarea = (
    <Textarea
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

it('should render as controlled when just a default value is passed into the Textarea', () => {
  const textarea = <ControlledInput />;

  const wrapper = mount(textarea);
  const textareaElement = wrapper.find('[name="foo"]');

  // Since we are attaching the value to the state, using normal JS DOM interactions should
  // not update the value, but simulating the onChange behavior should.
  textareaElement.simulate('change', { target: { value: 'Jill' } });
  textareaElement.at(0).nodes.value = 'Johnny';

  expect(textareaElement.at(0).node.value).toEqual('Jill');
});
