/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import Field from '../../src/Field';

it('should render a default component', () => {
  const field = (<Field />);
  const wrapper = shallow(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a Field that has the error, label, and help props set', () => {
  const input = (
    <Field
      required={false}
      name="foo"
      value="bar"
    />);

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render a Field that has children in it', () => {
  const input = (
    <Field
      required={false}
      name="foo"
      value="bar"
      htmlFor="test"
    >
      <input id="test" type="text" value="Test" />
    </Field>
  );

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});
