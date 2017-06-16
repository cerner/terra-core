/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import Field from '../../src/Field';

it('should render a default component', () => {
  const field = (<Field />);
  const wrapper = shallow(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a Field when all the possible props are passed into it', () => {
  const input = (
    <Field
      error="This field is required"
      help="This is a test input"
      htmlFor="test"
      label="Text"
      labelAttrs={{ className: 'healtheintent-legend' }}
      isInline
      required
    >
      <input id="test" type="text" value="Test" />
    </Field>
  );

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});
