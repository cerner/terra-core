/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import Fieldset from '../../src/Fieldset';

it('should render a default component', () => {
  const field = (<Fieldset />);
  const wrapper = shallow(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a Fieldset that has the error, label, and help props set', () => {
  const input = (
    <Fieldset
      help="foo"
      legend="bar"
    />);

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render a Field that has children in it', () => {
  const input = (
    <Fieldset
      help="foo"
      legend="bar"
    >
      <input type="radio" value="Test" />
    </Fieldset>
  );

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});
