/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import Control from '../../src/Control';

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
      labelText="Do you have any Children?"
      labelTextAttrs={{ className: 'healtheintent-label-text' }}
      name="children_present"
      value="children_present"
      required={true}
      inputAttrs={{ className: 'healtheintent-application' }}
      isInline={false}
    />);

  const wrapper = shallow(choiceField);
  expect(wrapper).toMatchSnapshot();
});

it('should render a ChoiceField with a radio', () => {
  const choiceField = (
    <Control
      type="radio"
      labelText="Do you have any Children?"
      labelTextAttrs={{ className: 'healtheintent-label-text' }}
      name="children_present"
      value="children_present"
      required={true}
      inputAttrs={{ className: 'healtheintent-application' }}
      isInline={false}
    />);

  const wrapper = shallow(choiceField);
  expect(wrapper).toMatchSnapshot();
});

it('should render as an uncontrolled radio when just a defaultChecked value is passed into the Control', () => {
  const choiceField = (<Control type="radio" defaultChecked />);
  const wrapper = shallow(choiceField);
  expect(wrapper).toMatchSnapshot();
});

it('should render as an controlled radio when a checked value and onChange function are passed into the Control', () => {
  const choiceField = (<Control type="radio" checked onChange={() => {}} />);
  const wrapper = shallow(choiceField);
  expect(wrapper).toMatchSnapshot();
});

it('should render as an uncontrolled checkbox when just a defaultChecked value is passed into the Control', () => {
  const choiceField = (<Control type="checkbox" defaultChecked />);
  const wrapper = shallow(choiceField);
  expect(wrapper).toMatchSnapshot();
});

it('should render as an controlled checkbox when a checked value and onChange function are passed into the Control', () => {
  const choiceField = (<Control type="checkbox" checked onChange={() => {}} />);
  const wrapper = shallow(choiceField);
  expect(wrapper).toMatchSnapshot();
});
