import React from 'react';
import TextField from '../../src/TextField';

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
      error="This field is required"
      help="This will not be shared with outside sources"
      inputAttrs={{ className: 'healtheintent-application' }}
      minLength={8}
      maxLength={75}
      isInline
      required
    />);

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render as uncontrolled when just a default value is passed into the TextField', () => {
  const input = <TextField defaultValue="foo" />;
  const wrapper = mount(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render as controlled when just a default value is passed into the TextField', () => {
  const input = <TextField value="foo" onChange={() => {}} />;
  const wrapper = mount(input);
  expect(wrapper).toMatchSnapshot();
});
