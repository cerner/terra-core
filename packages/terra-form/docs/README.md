# Terra Form

Components for building forms

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-form`
  - `yarn add terra-form`

## Usage

Terra has several different form components for building forms.

[ChoiceField](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/components/ChoiceField.md)

[Control](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/components/Control.md)

[Field](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/components/Field.md)

[Input](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/components/Input.md)

[MultiChoiceField](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/components/MultiChoiceField.md)

[NumberField](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/components/NumberField.md)

[Textarea](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/components/Textarea.md)

[TextareaField](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/components/TextareaField.md)

[TextField](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/components/TextField.md)

To use these components, create a React component that contains a form element, and then insert the Terra form components into that form.

The recommended approach for building forms is to stick with the field components that are build for you (ChoiceField, MultiChoiceField, NumberField, Textarea, TextareaField, Field). If you need to create a custom field, the Field, Control, Input, and Textarea components are available for use.

When using input fields, React has two ways of using inputs: controlled or uncontrolled. Controlled maps the value of the input to the state of the component, while uncontrolled does not (https://facebook.github.io/react/docs/uncontrolled-components.html). If you would like to use a controlled input (ideal for forms that need to do validations with JavaScript and send ajax requests), provide a value and an onChange function to the component. If you would like to use an uncontrolled input (ideal for forms that do straight backend requests), provide just a defaultValue into the input **Note: If you provide both a value and defaultValue to the input, React will be confused as to whether you are working with an uncontrolled input or a controlled one. Provide either a value or a defaultValue to the input, but not both.**