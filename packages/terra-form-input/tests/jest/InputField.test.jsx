import React from 'react';
import IconHelp from 'terra-icon/lib/icon/IconHelp';

import InputField from '../../src/InputField';

it('should render a default InputField component', () => {
  const textarea = <InputField inputId="test-input" label="Label" />;
  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a disabled InputField component', () => {
  const textarea = <InputField disabled inputId="test-input" label="Label" />;
  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a disabled InputField component via inputAttrs', () => {
  const textarea = <InputField inputId="test-input" inputAttrs={{ disabled: true }} label="Label" />;
  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a InputField with props', () => {
  const textarea = (
    <InputField
      inputId="test-input"
      defaultValue="Value"
      error="Text"
      errorIcon={<IconHelp />}
      help="Help"
      hideRequired
      inputAttrs={{
        name: 'test',
      }}
      type="number"
      isInline
      isInvalid
      isLabelHidden
      label="Label Test"
      labelAttrs={{
        className: 'label',
      }}
      onChange={() => {}}
      refCallback={() => {}}
      showOptional
      value="Value"
    />
  );

  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a valid InputField with props', () => {
  const textarea = (
    <InputField
      inputId="test-input"
      defaultValue="Value"
      error="Text"
      errorIcon={<IconHelp />}
      help="Help"
      hideRequired
      inputAttrs={{
        name: 'test',
      }}
      type="number"
      isInline
      isLabelHidden
      label="Label Test"
      labelAttrs={{
        className: 'label',
      }}
      onChange={() => {}}
      refCallback={() => {}}
      showOptional
      value="Value"
    />
  );

  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a InputField with type specified through InputAttributes', () => {
  const textarea = (
    <InputField
      inputId="test-input"
      defaultValue="Value"
      error="Text"
      errorIcon={<IconHelp />}
      help="Help"
      hideRequired
      inputAttrs={{
        name: 'test',
        type: 'number',
      }}
      isInline
      isInvalid
      isLabelHidden
      label="Label Test"
      labelAttrs={{
        className: 'label',
      }}
      onChange={() => {}}
      refCallback={() => {}}
      showOptional
      value="Value"
    />
  );

  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a InputField with type specified by type attribute when both type attribute and InputAttributes are given', () => {
  const type = 'Text';
  const textarea = (
    <InputField
      inputId="test-input"
      defaultValue="Value"
      error="Text"
      errorIcon={<IconHelp />}
      help="Help"
      hideRequired
      inputAttrs={{
        name: 'test',
        type: 'number',
      }}
      type={type}
      isInline
      isInvalid
      isLabelHidden
      label="Label Test"
      labelAttrs={{
        className: 'label',
      }}
      onChange={() => {}}
      refCallback={() => {}}
      showOptional
      value="Value"
    />
  );

  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});
