import React from 'react';
import Input from '../../src/Input';

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
    />);

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render as uncontrolled when just a default value is passed into the function', () => {
  const input = <Input defaultValue="foo" />;
  const wrapper = mount(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render as controlled when just a default value is passed into the function', () => {
  const input = <Input value="foo" onChange={() => {}} />;
  const wrapper = mount(input);
  expect(wrapper).toMatchSnapshot();
});
