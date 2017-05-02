/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import Control from '../../../src/components/Control';

it('should render a default checkbox when type is "checkbox"', () => {
  const choiceField = (<Control type="checkbox" />);
  const wrapper = shallow(choiceField);
  expect(wrapper).toMatchSnapshot();
});

it('should render a default checkbox when type is "radio"', () => {
  const choiceField = (<Control type="radio" />);
  const wrapper = shallow(choiceField);
  expect(wrapper).toMatchSnapshot();
});

it('should render a ChoiceField with a checkbox', () => {
  const choiceField = (
    <Control
      type="checkbox"
      label="Do you have any Children?"
      name="children_present"
      value="children_present"
      required={true}
      attrs={{ className: 'healtheintent-application' }}
      isInline={false}
    />);

  const wrapper = shallow(choiceField);
  expect(wrapper).toMatchSnapshot();
});

it('should render a ChoiceField with a radio', () => {
  const choiceField = (
    <Control
      type="radio"
      label="Do you have any Children?"
      name="children_present"
      value="children_present"
      required={true}
      attrs={{ className: 'healtheintent-application' }}
      isInline={false}
    />);

  const wrapper = shallow(choiceField);
  expect(wrapper).toMatchSnapshot();
});
