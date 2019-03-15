import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import RadioField from '../../src/RadioField';

it('should render a default radio field', () => {
  const radioField = (<RadioField legend="Default RadioField" />);
  const wrapper = shallowWithIntl(radioField);
  expect(wrapper).toMatchSnapshot();
});

it('should render an invalid radio field', () => {
  const radioField = (<RadioField legend="Invalid RadioField" isInvalid error="Test Error" />);
  const wrapper = shallowWithIntl(radioField);
  expect(wrapper).toMatchSnapshot();
});

it('should render a help message', () => {
  const radioField = (<RadioField legend="Help RadioField" help="This will help up determine how many chairs to request" />);
  const wrapper = shallowWithIntl(radioField);
  expect(wrapper).toMatchSnapshot();
});

it('should render an optional part on the label', () => {
  const radioField = (<RadioField legend="Optional RadioField" showOptional />);
  const wrapper = shallowWithIntl(radioField);
  expect(wrapper).toMatchSnapshot();
});

it('should render required radio field', () => {
  const radioField = (<RadioField legend="Required RadioField" required />);
  const wrapper = shallowWithIntl(radioField);
  expect(wrapper).toMatchSnapshot();
});

it('should hide the required indicator when requested', () => {
  const radioField = (<RadioField legend="Hidden Required RadioField" required hideRequired />);
  const wrapper = shallowWithIntl(radioField);
  expect(wrapper).toMatchSnapshot();
});

it('should render the legend with custom attributes properly', () => {
  const radioField = (<RadioField legend="Custom Legend RadioField" legendAttrs={{ class: 'application-legend' }} />);
  const wrapper = shallowWithIntl(radioField);
  expect(wrapper).toMatchSnapshot();
});

it('should display the required icon for fields with hideRequired, but have a state of invalid', () => {
  const checkBox = (<RadioField legend="Hidden Required CheckboxField" required hideRequired isInvalid />);
  const wrapper = shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should hide the legend when requested', () => {
  const radioField = (<RadioField legend="Hidden Legend legend" legendAttrs={{ class: 'application-legend' }} isLegendHidden />);
  const wrapper = shallowWithIntl(radioField);
  expect(wrapper).toMatchSnapshot();
});
