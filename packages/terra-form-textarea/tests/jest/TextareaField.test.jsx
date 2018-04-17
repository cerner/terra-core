import React from 'react';
import TextareaField from '../../src/TextareaField';

it('should render a default TextareaField component', () => {
  const textarea = <TextareaField label="Label" />;
  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a TextareaField with props', () => {
  const textarea = (
    <TextareaField
      defaultValue="Value"
      error="Text"
      help="Help"
      hideRequired
      inputAttrs={{
        name: 'test',
        rows: 15,
      }}
      inputId="test"
      isInline
      isInvalid
      isLabelHidden
      label="Label Test"
      labelAttrs={{ className: 'label' }}
      onChange={() => {}}
      hideRequiredshowOptional
      value="Value"
    />
  );

  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});
