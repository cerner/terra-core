import React from 'react';
import TextField from '../../../src/components/TextField';

it('should render a default TextField component', () => {
  const input = (<TextField />);
  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render a TextField with the rest of the props', () => {
  const input = (
    <TextField
      type="email"
      label="Email Address"
      name="email"
      value=""
      error="This field is required"
      help="This will not be shared with outside sources"
      required
      attrs={{ className: 'healtheintent-application' }}
      minLength={8}
      maxLength={75}
    />);

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});
