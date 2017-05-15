import React from 'react';
import Input from '../../../src/components/Input';

it('should render a default component', () => {
  const input = (<Input value="" />);
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
