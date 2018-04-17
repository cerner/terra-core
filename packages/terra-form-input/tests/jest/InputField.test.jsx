import React from 'react';
import InputField from '../../src/InputField';

it('should render a default InputField component', () => {
  const textarea = <InputField label="Label" />;
  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a InputField with props', () => {
  const textarea = (
    <InputField
      defaultValue="Value"
      error="Text"
      help="Help"
      hideRequired
      inputAttrs={{
        name: 'test',
        type: 'number',
      }}
      inputId="test"
      isInline
      isInvalid
      isLabelHidden
      label="Label Test"
      labelAttrs={{
        className: 'label',
      }}
      onChange={() => {}}
      hideRequiredshowOptional
      value="Value"
    />
  );

  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});
