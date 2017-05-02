/* eslint-disable react/jsx-boolean-value */

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
      required={false}
      name="foo"
      value="bar"
    />);

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});
