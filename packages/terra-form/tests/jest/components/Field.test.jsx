/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import Field from '../../../src/components/Field';

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
    >
      <input type="text" value="Test" />
    </Field>
  );

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});
