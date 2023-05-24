import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import CheckboxField from '../../src/CheckboxField';
import Checkbox from '../../src/Checkbox';

window.matchMedia = () => ({ matches: true });

let userAgentGetter;
beforeEach(() => {
  userAgentGetter = jest.spyOn(window.navigator, 'userAgent', 'get');
});

it('should render a default checkbox field', () => {
  const checkBox = (<CheckboxField legend="Default CheckboxField" />);
  const wrapper = shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render checkbox field with div element for Safari browser or Edg browser', () => {
  userAgentGetter.mockReturnValue('Safari Edg');
  const wrapper = shallowWithIntl(<CheckboxField legend="Coustom Message CheckboxField" />);
  expect(wrapper.dive()).toMatchSnapshot();
});

it('should render checkbox field with legend element for Chrome browser', () => {
  userAgentGetter.mockReturnValue('Chrome');
  const wrapper = shallowWithIntl(<CheckboxField legend="Coustom Message CheckboxField" />);
  expect(wrapper.dive()).toMatchSnapshot();
});


it('should render a default checkbox field even if it has an undefined child', () => {
  const undefinedChild = undefined;
  const checkBox = (<CheckboxField legend="Default CheckboxField">{ undefinedChild }</CheckboxField>);
  const wrapper = shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render an invalid checkbox field', () => {
  const checkBox = (<CheckboxField legend="Invalid CheckboxField" isInvalid error="Test Error" />);
  const wrapper = shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render a help message', () => {
  const checkBox = (<CheckboxField legend="Help CheckboxField" help="This will help up determine how many chairs to request" />);
  const wrapper = shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render an optional part on the label', () => {
  const checkBox = (<CheckboxField legend="Optional CheckboxField" showOptional />);
  const wrapper = shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render required checkbox field', () => {
  const checkBox = (<CheckboxField legend="Required CheckboxField" required />);
  const wrapper = shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should hide the required indicator when requested', () => {
  const checkBox = (<CheckboxField legend="Hidden Required CheckboxField" required hideRequired />);
  const wrapper = shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should display the required icon for fields with hideRequired, but have a state of invalid', () => {
  const checkBox = (<CheckboxField legend="Hidden Required CheckboxField" required hideRequired isInvalid />);
  const wrapper = shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render the legend with custom attributes properly', () => {
  const checkBox = (<CheckboxField legend="Custom Legend CheckboxField" legendAttrs={{ class: 'application-legend' }} />);
  const wrapper = shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should hide the legend when requested', () => {
  const checkBox = (<CheckboxField legend="Hidden Legend legend" legendAttrs={{ class: 'application-legend' }} isLegendHidden />);
  const wrapper = shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const wrapper = mountWithIntl(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <CheckboxField legend="Hidden Legend legend" />
    </ThemeContextProvider>,
  );
  expect(wrapper).toMatchSnapshot();
});

it('correctly applies "inputAttrs" property to the Checkbox component', () => {
  const attrKey = 'data-custom-attr';
  const attrValue = 'attr data';
  const checkboxField = (
    <CheckboxField legend="Default CheckboxField">
      <Checkbox
        labelText="Default label"
        inputAttrs={{
          [attrKey]: attrValue,
        }}
      />
    </CheckboxField>
  );
  const wrapper = mountWithIntl(checkboxField);
  expect(wrapper.find('input').prop(attrKey)).toBe(attrValue);
  expect(wrapper).toMatchSnapshot();
});
