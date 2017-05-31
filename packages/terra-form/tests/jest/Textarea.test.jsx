import React from 'react';
import Textarea from '../../src/Textarea';

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
  expect(wrapper).toMatchSnapshot();
});

it('should render as controlled when just a default value is passed into the Textarea', () => {
  const textarea = (
    <Textarea
      name="foo"
      value="foo"
      onChange={() => {}}
    />
  );

  const wrapper = mount(textarea);
  expect(wrapper).toMatchSnapshot();
});
