import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import uniqueid from 'lodash.uniqueid';

import Radio, { RadioField } from '../../src';

window.matchMedia = () => ({ matches: true });
jest.mock('lodash.uniqueid');

let userAgentGetter;
beforeEach(() => {
  userAgentGetter = jest.spyOn(window.navigator, 'userAgent', 'get');
  uniqueid.mockReturnValue('uuid123');
});

afterEach(() => {
  jest.restoreAllMocks();
});

it('should render a default radio field', () => {
  const radioField = <RadioField legend="Default RadioField" />;
  const wrapper = enzymeIntl.shallowWithIntl(radioField);
  expect(wrapper).toMatchSnapshot();
});

it('should render radio field with div element for Safari browser or Edg browser', () => {
  userAgentGetter.mockReturnValue('Safari Edg');
  const wrapper = enzymeIntl.shallowWithIntl(<RadioField legend="Custom Message RadioField" />).dive();
  const radioDiv = wrapper.find('fieldset');
  const divExist = radioDiv.find('div');
  expect(divExist).toBeDefined();
  expect(wrapper).toMatchSnapshot();
});

it('should render radio field with legend element for Chrome browser', () => {
  userAgentGetter.mockReturnValue('Chrome');
  const wrapper = enzymeIntl.shallowWithIntl(<RadioField legend="Custom Message RadioField" />).dive();
  const radioDiv = wrapper.find('fieldset');
  const legendExist = radioDiv.find('legend');
  expect(legendExist).toBeDefined();
  expect(wrapper).toMatchSnapshot();
});

it('should render a default radio field if it has an undefined child', () => {
  const undefinedChild = undefined;
  const radioField = (
    <RadioField legend="Default RadioField">{undefinedChild}</RadioField>
  );
  const wrapper = enzymeIntl.shallowWithIntl(radioField);
  expect(wrapper).toMatchSnapshot();
});

it('should render an invalid radio field', () => {
  const radioField = (
    <RadioField legend="Invalid RadioField" isInvalid error="Test Error" />
  );
  const wrapper = enzymeIntl.shallowWithIntl(radioField);
  expect(wrapper).toMatchSnapshot();
});

it('should render a help message', () => {
  const radioField = (
    <RadioField
      legend="Help RadioField"
      help="This will help up determine how many chairs to request"
    />
  );
  const wrapper = enzymeIntl.shallowWithIntl(radioField);
  expect(wrapper).toMatchSnapshot();
});

it('should render onkeydown and onclick event on radio button for safari browser', () => {
  userAgentGetter.mockReturnValue('Safari');
  const radioField = (
    <RadioField
      id="RadioFieldOne"
      legend="Help RadioField"
      help="This will help up determine how many chairs to request"
    >
      <Radio id="firstRadio" labelText="Radio" />
    </RadioField>
  );
  const wrapper = enzymeIntl.mountWithIntl(radioField);
  expect(wrapper.find('input').prop('onKeyDown')).toBeDefined();
  expect(wrapper.find('input').prop('onClick')).toBeDefined();
  expect(wrapper).toMatchSnapshot();
});

it('should not render onkeydown and onclick event on radio button for non-safari browser', () => {
  const radioField = (
    <RadioField
      id="RadioFieldOne"
      legend="Help RadioField"
      help="This will help up determine how many chairs to request"
    >
      <Radio id="firstRadio" labelText="Radio" />
    </RadioField>
  );
  const wrapper = enzymeIntl.mountWithIntl(radioField);
  expect(wrapper.find('input').prop('onKeyDown')).toBeUndefined();
  expect(wrapper.find('input').prop('onClick')).toBeUndefined();
  expect(wrapper).toMatchSnapshot();
});

it('should render an optional part on the label', () => {
  const radioField = <RadioField legend="Optional RadioField" showOptional />;
  const wrapper = enzymeIntl.shallowWithIntl(radioField);
  expect(wrapper).toMatchSnapshot();
});

it('should render required radio field', () => {
  const radioField = <RadioField legend="Required RadioField" required />;
  const wrapper = enzymeIntl.shallowWithIntl(radioField);
  expect(wrapper).toMatchSnapshot();
});

it('should hide the required indicator when requested', () => {
  const radioField = (
    <RadioField legend="Hidden Required RadioField" required hideRequired />
  );
  const wrapper = enzymeIntl.shallowWithIntl(radioField);
  expect(wrapper).toMatchSnapshot();
});

it('should render the legend with custom attributes properly', () => {
  const radioField = (
    <RadioField
      legend="Custom Legend RadioField"
      legendAttrs={{ class: 'application-legend' }}
    />
  );
  const wrapper = enzymeIntl.shallowWithIntl(radioField);
  expect(wrapper).toMatchSnapshot();
});

it('should display the required icon for fields with hideRequired, but have a state of invalid', () => {
  const checkBox = (
    <RadioField
      legend="Hidden Required CheckboxField"
      required
      hideRequired
      isInvalid
    />
  );
  const wrapper = enzymeIntl.shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should hide the legend when requested', () => {
  const radioField = (
    <RadioField
      legend="Hidden Legend legend"
      legendAttrs={{ class: 'application-legend' }}
      isLegendHidden
    />
  );
  const wrapper = enzymeIntl.shallowWithIntl(radioField);
  expect(wrapper).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const wrapper = enzymeIntl.mountWithIntl(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <RadioField legend="Default RadioField" />
    </ThemeContextProvider>,
  );
  expect(wrapper).toMatchSnapshot();
});

it('correctly applies "inputAttrs" property to the Radio component', () => {
  const attrKey = 'data-custom-attr';
  const attrValue = 'attr data';
  const radioField = (
    <RadioField legend="Default RadioField">
      <Radio
        labelText="Default label"
        inputAttrs={{
          [attrKey]: attrValue,
        }}
      />
    </RadioField>
  );
  const wrapper = enzymeIntl.mountWithIntl(radioField);
  expect(wrapper.find('input').prop(attrKey)).toBe(attrValue);
  expect(wrapper).toMatchSnapshot();
});
