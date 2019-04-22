import React from 'react';
import IconHelp from 'terra-icon/lib/icon/IconHelp';

import TextareaField from '../../src/TextareaField';

it('should render a default TextareaField component', () => {
  const textarea = <TextareaField inputId="test-input" label="Label" />;
  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a disabled TextareaField component', () => {
  const textarea = <TextareaField disabled inputId="test-input" label="Label" />;
  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a TextareaField with props', () => {
  const textarea = (
    <TextareaField
      inputId="test-input"
      defaultValue="Value"
      error="Text"
      errorIcon={<IconHelp />}
      help="Help"
      hideRequired
      inputAttrs={{
        name: 'test',
        rows: 15,
      }}
      isInline
      isInvalid
      isLabelHidden
      label="Label Test"
      labelAttrs={{ className: 'label' }}
      onChange={() => {}}
      showOptional
      value="Value"
    />
  );

  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a valid TextareaField with props', () => {
  const textarea = (
    <TextareaField
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
      isLabelHidden
      label="Label Test"
      labelAttrs={{
        className: 'label',
      }}
      onChange={() => {}}
      showOptional
      value="Value"
    />
  );

  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});
