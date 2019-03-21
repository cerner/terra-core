/* eslint-disable react/jsx-boolean-value, import/no-extraneous-dependencies */
import React from 'react';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
import { shallowWithIntl } from 'terra-enzyme-intl';

import Field from '../../src/Field';

it('should render a field label', () => {
  const field = (
    <Field
      label="Field Label"
    />
  );
  const wrapper = shallowWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render an optional field label', () => {
  const field = (
    <Field
      label="Field Label"
      showOptional
    />
  );
  const wrapper = shallowWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a required field label', () => {
  const field = (
    <Field
      label="Field Label"
      required
    />
  );
  const wrapper = shallowWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a required field label with required hidden', () => {
  const field = (
    <Field
      label="Field Label"
      required
      hideRequired
    />
  );
  const wrapper = shallowWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a field with a hidden label', () => {
  const field = (
    <Field
      label="Field Label"
      isLabelHidden
    />
  );
  const wrapper = shallowWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a required field with a hidden label', () => {
  const field = (
    <Field
      label="Field Label"
      isLabelHidden
      required
    />
  );
  const wrapper = shallowWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a field error message', () => {
  const field = (
    <Field
      label="Field Label"
      isLabelHidden
      error="Error Text"
    />
  );
  const wrapper = shallowWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a field help message', () => {
  const field = (
    <Field
      label="Field Label"
      isLabelHidden
      help="Help Text"
    />
  );
  const wrapper = shallowWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render an inline field with most of the possible props are passed into it', () => {
  const field = (
    <Field
      error="This field is required"
      help="This is a test input"
      htmlFor="test"
      label="Text"
      labelAttrs={{ className: 'healtheintent-legend' }}
      isInline
    >
      <input id="test" type="text" />
    </Field>
  );

  const wrapper = shallowWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a field in error', () => {
  const field = (
    <Field
      label="Field Label"
      error="Error Text"
      help="Help Text"
      isInvalid
    />
  );
  const wrapper = shallowWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render an optional field in error', () => {
  const field = (
    <Field
      label="Field Label"
      error="Error Text"
      help="Help Text"
      showOptional
      isInvalid
    />
  );
  const wrapper = shallowWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a required field in error', () => {
  const field = (
    <Field
      label="Field Label"
      error="Error Text"
      help="Help Text"
      required
      isInvalid
    />
  );
  const wrapper = shallowWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a field with a hidden label in error', () => {
  const field = (
    <Field
      label="Field Label"
      error="Error Text"
      help="Help Text"
      isInvalid
    />
  );
  const wrapper = shallowWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a required field with a hidden label in error', () => {
  const field = (
    <Field
      label="Field Label"
      error="Error Text"
      help="Help Text"
      isLabelHidden
      required
      isInvalid
    />
  );
  const wrapper = shallowWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a field with a custom error icon', () => {
  const field = (
    <Field
      label="Field Label"
      errorIcon={<IconHelp />}
    />
  );
  const wrapper = shallowWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});
