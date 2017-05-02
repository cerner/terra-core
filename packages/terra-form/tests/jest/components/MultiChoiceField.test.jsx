/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import MultiChoiceField from '../../../src/components/MultiChoiceField';

it('should render a default component', () => {
  const input = (<MultiChoiceField />);
  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('should render a MultiChoiceField with the rest of the props', () => {
  const input = (
    <MultiChoiceField
      label="Select the programming languages you have experience with"
      name="language_experience"
      error="This field is required"
      help="Note: All checked languages should have at least 3 months experience"
      required={true}
      choices={[{ name: 'C', value: 'C' }, { name: 'java', value: 'Java' }]}
      isInline={false}
    />);

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});
