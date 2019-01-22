import React from 'react';
import Radio from '../../src/Radio';

it('should render a radio', () => {
  const checkBox = (<Radio labelText="Radio" />);
  const wrapper = shallow(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render an uncontrolled radio', () => {
  const checkBox = (<Radio defaultChecked labelText="Radio" />);
  const wrapper = shallow(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render a controlled radio', () => {
  const checkBox = (<Radio checked onChange={() => {}} labelText="Radio" />);
  const wrapper = shallow(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render a disabled radio', () => {
  const checkBox = (<Radio checked onChange={() => {}} labelText="Radio" disabled />);
  const wrapper = shallow(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render a radio with a hidden label', () => {
  const checkBox = (<Radio checked onChange={() => {}} labelText="Radio" isLabelHidden />);
  const wrapper = shallow(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render a ChoiceField with a radio', () => {
  const choiceField = (
    <Radio
      labelText="Do you have any Children?"
      labelTextAttrs={{ className: 'healtheintent-label-text' }}
      name="children_present"
      value="children_present"
      inputAttrs={{ className: 'healtheintent-application' }}
      isInline={false}
    />
  );

  const wrapper = shallow(choiceField);
  expect(wrapper).toMatchSnapshot();
});
