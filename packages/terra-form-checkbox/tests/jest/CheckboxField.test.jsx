import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import Checkbox, { CheckboxField } from '../../src';

window.matchMedia = () => ({ matches: true });

let mockSpyUuid;
beforeAll(() => {
  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
});

afterAll(() => {
  mockSpyUuid.mockRestore();
});

let userAgentGetter;
beforeEach(() => {
  userAgentGetter = jest.spyOn(window.navigator, 'userAgent', 'get');
});

it('should render a default checkbox field', () => {
  const checkBox = (<CheckboxField legend="Default CheckboxField" />);
  const wrapper = enzymeIntl.shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render checkbox field with div element for Safari browser or Edg browser', () => {
  userAgentGetter.mockReturnValue('Safari Edg');
  const wrapper = enzymeIntl.shallowWithIntl(<CheckboxField legend="Custom Message CheckboxField" />);
  expect(wrapper.dive()).toMatchInlineSnapshot(`
    <fieldset
      className="checkbox-field"
    >
      <div
        className="legend-group"
        id="terra-checkbox-field-description-1"
      >
        <div
          className="legend"
        >
          Custom Message CheckboxField
          <span
            className="error-icon-hidden"
          />
        </div>
      </div>
    </fieldset>
  `);
});

it('should render checkbox field with legend element for Chrome browser', () => {
  userAgentGetter.mockReturnValue('Chrome');
  const wrapper = enzymeIntl.shallowWithIntl(<CheckboxField legend="Custom Message CheckboxField" />);
  expect(wrapper.dive()).toMatchInlineSnapshot(`
    <fieldset
      className="checkbox-field"
    >
      <legend
        className="legend-group"
        id="terra-checkbox-field-description-2"
      >
        <div
          className="legend"
        >
          Custom Message CheckboxField
          <span
            className="error-icon-hidden"
          />
        </div>
      </legend>
    </fieldset>
  `);
});

it('should render a default checkbox field even if it has an undefined child', () => {
  const undefinedChild = undefined;
  const checkBox = (<CheckboxField legend="Default CheckboxField">{ undefinedChild }</CheckboxField>);
  const wrapper = enzymeIntl.shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render an invalid checkbox field', () => {
  const checkBox = (<CheckboxField legend="Invalid CheckboxField" isInvalid error="Test Error" />);
  const wrapper = enzymeIntl.shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render a help message', () => {
  const checkBox = (<CheckboxField legend="Help CheckboxField" help="This will help up determine how many chairs to request" />);
  const wrapper = enzymeIntl.shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render an optional part on the label', () => {
  const checkBox = (<CheckboxField legend="Optional CheckboxField" showOptional />);
  const wrapper = enzymeIntl.shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render required checkbox field', () => {
  const checkBox = (<CheckboxField legend="Required CheckboxField" required />);
  const wrapper = enzymeIntl.shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should hide the required indicator when requested', () => {
  const checkBox = (<CheckboxField legend="Hidden Required CheckboxField" required hideRequired />);
  const wrapper = enzymeIntl.shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should display the required icon for fields with hideRequired, but have a state of invalid', () => {
  const checkBox = (<CheckboxField legend="Hidden Required CheckboxField" required hideRequired isInvalid />);
  const wrapper = enzymeIntl.shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render the legend with custom attributes properly', () => {
  const checkBox = (<CheckboxField legend="Custom Legend CheckboxField" legendAttrs={{ class: 'application-legend' }} />);
  const wrapper = enzymeIntl.shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should hide the legend when requested', () => {
  const checkBox = (<CheckboxField legend="Hidden Legend legend" legendAttrs={{ class: 'application-legend' }} isLegendHidden />);
  const wrapper = enzymeIntl.shallowWithIntl(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const wrapper = enzymeIntl.mountWithIntl(
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
  const wrapper = enzymeIntl.mountWithIntl(checkboxField);
  expect(wrapper.find('input').prop(attrKey)).toBe(attrValue);
  expect(wrapper).toMatchSnapshot();
});
