# Terra Form

Components for building forms

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-form`
  - `yarn add terra-form`

## Usage

Terra has several different form components for building forms.

[Field](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/Field.md)

[Fieldset](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/Fieldset.md)

[Input](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/Input.md)

[Control](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/Control.md)

[NumberField](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/NumberField.md)

[Textarea](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/Textarea.md)

[TextareaField](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/TextareaField.md)

[TextField](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/TextField.md)

[Select](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/Select.md)

[SelectField](https://github.com/cerner/terra-core/tree/master/packages/terra-form/docs/SelectField.md)

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)


To use these components, create a React component that contains a form element, and then insert the Terra form components into that form.

When using input fields, React has two ways of using inputs: [controlled](https://facebook.github.io/react/docs/forms.html#controlled-components) or [uncontrolled](https://facebook.github.io/react/docs/uncontrolled-components.html). Controlled input are designed to attach the value of the input to the state of the component, while uncontrolled inputs are left to operate as normal html inputs would. If you would like to use a controlled input (ideal for forms that need to do validations with JavaScript and send ajax requests), provide a value and an onChange function. If you would like to use an uncontrolled input (ideal for forms that do straight backend requests), provide a defaultValue into the input.

**Note: If you provide both a value and defaultValue to the input, React will be confused as to whether you are working with an uncontrolled input or a controlled one. Provide either a value or a defaultValue to the input, but not both.**

## Examples

### Controlled Input

    class Form extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          formData: {
            name: 'Joe'
          },
        };

        this.submitForm = this.submitForm.bind(this);
        this.updateFormInput = this.updateFormInput.bind(this);
      }

      submitForm(e) {
        e.preventDefault();
      }

      updateFormInput(e) {
        const formData = Object.assign({}, this.state.formData);
        formData[e.target.name] = e.target.value;
        this.setState({ formData });
      }

      render() {
        return (
          <form onSubmit={this.submitForm}>
            <Input type="text" name="first" value={this.state.formData.first} onChange={this.updateFormInput} />
          </form>
        );
      }
    }

### Uncontrolled Input

    class Form extends React.Component {
      constructor(props) {
        super(props);
      }

      render() {
        return (
          <form>
            <Input type="text" name="first" defaultValue={'Joe'} />
          </form>
        );
      }
    }
