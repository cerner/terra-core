/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import ChoiceField from '../../../src/components/ChoiceField';

it('should render a default component', () => {
  const choiceField = (<ChoiceField />);
  const wrapper = shallow(choiceField);
  expect(wrapper).toMatchSnapshot();
});

it('should render a ChoiceField with the rest of the props', () => {
  const choiceField = (
    <ChoiceField
      label="What State do you live in?"
      name="children_present"
      value="children_present"
      error="This field is required"
      help="State Locations help determine what campus to place you at"
      required={true}
      attrs={{ className: 'healtheintent-application' }}
      choices={[{ name: 'Kansas', value: 'ks' }, { name: 'Missouri', value: 'MO' }]}
      isInline={false}
    />);

  const wrapper = shallow(choiceField);
  expect(wrapper).toMatchSnapshot();
});
