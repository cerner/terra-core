/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import TextareaField from '../../../src/components/TextareaField';

it('should render a default TextAreaField component', () => {
  const input = <TextareaField />;
  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render a TextAreaField with the rest of the props', () => {
  const input = (
    <TextareaField
      label="Profile Description"
      name="profile_description"
      value=""
      error="Name is required"
      help="The name given to you at birth."
      maxLength={15}
      minLength={5}
      required={true}
      attrs={{ autoFocus: true }}
    />);

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});
