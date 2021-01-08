import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import IconHelp from 'terra-icon/lib/icon/IconHelp';
import TextareaField from '../../src/TextareaField';

window.matchMedia = () => ({ matches: true });

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

it('should render a disabled TextareaField component via inputAttrs', () => {
  const textarea = <TextareaField inputId="test-input" inputAttrs={{ disabled: true }} label="Label" />;
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
      }}
      rows={15}
      isAutoResizable
      isInline
      isInvalid
      isLabelHidden
      label="Label Test"
      labelAttrs={{ className: 'label' }}
      onChange={() => { }}
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
      onChange={() => { }}
      showOptional
      value="Value"
    />
  );

  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const wrapper = mount(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <TextareaField inputId="test-input" label="Label" />
    </ThemeContextProvider>,
  );
  expect(wrapper).toMatchSnapshot();
});
