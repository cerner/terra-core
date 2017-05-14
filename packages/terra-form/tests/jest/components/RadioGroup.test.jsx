/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import RadioGroup from '../../../src/components/RadioGroup';

it('should render a default radioGroup', () => {
  const radioGroup = (<RadioGroup />);
  const wrapper = shallow(radioGroup);
  expect(wrapper).toMatchSnapshot();
});

it('should render a radioGroup with the rest of the props', () => {
  const radioGroup = (
    <RadioGroup
      legend="What State do you live in?"
      name="children_present"
      value="children_present"
      error="This field is required"
      help="State Locations help determine what campus to place you at"
      required
    />);

  const wrapper = shallow(radioGroup);
  expect(wrapper).toMatchSnapshot();
});
