/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import Textarea from '../../../src/components/Textarea';

it('should render a default TextArea component', () => {
  const input = <Textarea />;
  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render a TextArea with the rest of the props', () => {
  const input = (
    <Textarea
      name="description"
      required={true}
      value="I'm a software engineer working at Cerner"
    />);

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});
