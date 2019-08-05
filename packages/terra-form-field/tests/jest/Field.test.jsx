/* eslint-disable react/jsx-boolean-value, import/no-extraneous-dependencies */
import React from 'react';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';

import Input from './mocks/Input';
import Select from './mocks/Select';
import Textarea from './mocks/Textarea';
import Field from '../../src/Field';

it('should render a field label', () => {
  const field = (
    <Field
      label="Field Label"
      htmlFor="test"
    />
  );
  const wrapper = shallowWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render an optional field label', () => {
  const field = (
    <Field
      label="Field Label"
      htmlFor="test"
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
      htmlFor="test"
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
      htmlFor="test"
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
      htmlFor="test"
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
      htmlFor="test"
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
      htmlFor="test"
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
      htmlFor="test"
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
      htmlFor="test"
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
      htmlFor="test"
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
      htmlFor="test"
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
      htmlFor="test"
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
      htmlFor="test"
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
      htmlFor="test"
      errorIcon={<IconHelp />}
    />
  );
  const wrapper = shallowWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a required field with an Input', () => {
  const field = (
    <Field
      label="Field Label"
      htmlFor="test"
      required
    >
      <Input />
    </Field>
  );
  const wrapper = mountWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a required field with a Select', () => {
  const field = (
    <Field
      label="Field Label"
      htmlFor="test"
      required
    >
      <Select />
    </Field>
  );
  const wrapper = mountWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a required field with a Textarea', () => {
  const field = (
    <Field
      label="Field Label"
      htmlFor="test"
      required
    >
      <Textarea />
    </Field>
  );
  const wrapper = mountWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render an invalid field with an Input', () => {
  const field = (
    <Field
      label="Field Label"
      htmlFor="test"
      isInvalid
    >
      <Input />
    </Field>
  );
  const wrapper = mountWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render an invalid field with a Select', () => {
  const field = (
    <Field
      label="Field Label"
      htmlFor="test"
      isInvalid
    >
      <Select />
    </Field>
  );
  const wrapper = mountWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render an invalid field with an Textarea', () => {
  const field = (
    <Field
      label="Field Label"
      htmlFor="test"
      isInvalid
    >
      <Textarea />
    </Field>
  );
  const wrapper = mountWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render an invalid and required field with an Input', () => {
  const field = (
    <Field
      label="Field Label"
      htmlFor="test"
      isInvalid
      required
    >
      <Input />
    </Field>
  );
  const wrapper = mountWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render an invalid and required field with a Select', () => {
  const field = (
    <Field
      label="Field Label"
      htmlFor="test"
      isInvalid
      required
    >
      <Select />
    </Field>
  );
  const wrapper = mountWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render an invalid and required field with a Textarea', () => {
  const field = (
    <Field
      label="Field Label"
      htmlFor="test"
      isInvalid
      required
    >
      <Textarea />
    </Field>
  );
  const wrapper = mountWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a field with an Input', () => {
  const field = (
    <Field
      label="Field Label"
      htmlFor="test"
    >
      <Input />
    </Field>
  );
  const wrapper = mountWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a field with a Select', () => {
  const field = (
    <Field
      label="Field Label"
      htmlFor="test"
    >
      <Select />
    </Field>
  );
  const wrapper = mountWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a field with a Textarea', () => {
  const field = (
    <Field
      label="Field Label"
      htmlFor="test"
    >
      <Textarea />
    </Field>
  );
  const wrapper = mountWithIntl(field);
  expect(wrapper).toMatchSnapshot();
});
