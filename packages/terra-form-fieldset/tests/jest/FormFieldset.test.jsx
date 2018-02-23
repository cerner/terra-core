/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import Fieldset from '../../src/Fieldset';

it('should render a default component', () => {
  const field = (<Fieldset />);
  const wrapper = shallow(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a Fieldset when all the possible props are passed into it', () => {
  const input = (
    <Fieldset
      legend="Text"
      legendAttrs={{ className: 'healtheintent-legend' }}
      error="This field is required"
      help="This is a test input"
      isInline
      required
    >
      <input type="radio" value="Test" />
    </Fieldset>
  );

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});
