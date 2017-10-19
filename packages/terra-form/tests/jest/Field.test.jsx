/* eslint-disable react/jsx-boolean-value, import/no-extraneous-dependencies */
import React from 'react';
import intlContexts from './intl-context-setup';
import Field from '../../src/Field';

it('should render a default component', () => {
  const field = <Field />;
  const wrapper = shallow(field, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render a field label', () => {
  const field = (
    <Field
      label="Field Label"
    />
  );
  const wrapper = shallow(field, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render an optional field label', () => {
  const field = (
    <Field
      label="Field Label"
      showOptional
    />
  );
  const wrapper = shallow(field, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render a required field label', () => {
  const field = (
    <Field
      label="Field Label"
      required
    />
  );
  const wrapper = shallow(field, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render a required feild label with required hidden', () => {
  const field = (
    <Field
      label="Field Label"
      required
      hideRequired
    />
  );
  const wrapper = shallow(field, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render a feild error message', () => {
  const field = (
    <Field
      error="Error Text"
    />
  );
  const wrapper = shallow(field, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render a field help message', () => {
  const field = (
    <Field
      help="Help Text"
    />
  );
  const wrapper = shallow(field, intlContexts.shallowContext);
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

  const wrapper = shallow(field, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render a field in error', () => {
  const field = (
    <Field
      label="Field Label"
      error="Error Text"
      help="Help Text"
      inError
    />
  );
  const wrapper = shallow(field, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render an optional field in error', () => {
  const field = (
    <Field
      label="Field Label"
      error="Error Text"
      help="Help Text"
      showOptional
      inError
    />
  );
  const wrapper = shallow(field, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render a required field in error', () => {
  const field = (
    <Field
      label="Field Label"
      error="Error Text"
      help="Help Text"
      required
      inError
    />
  );
  const wrapper = shallow(field, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});
