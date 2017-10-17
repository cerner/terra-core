import React from 'react';

import Field from '../../../src/Field';

class FieldExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inError: false };
    this.handleInErrorChange = this.handleInErrorChange.bind(this);
  }

  handleInErrorChange() {
    this.setState({ inError: !this.state.inError });
  }

  render() {
    const field = (
      <Field
        id="label-required"
        style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
        label="Field Label"
        help="Help Message"
        error="Error Message"
        inError={this.state.inError}
      >
        <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
      </Field>
    );

    const optional = (
      <Field
        id="label-required"
        style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
        label="Field Label"
        help="Help Message"
        error="Error Message"
        inError={this.state.inError}
        showOptional
      >
        <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
      </Field>
    );

    const required = (
      <Field
        id="label-required"
        style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
        label="Field Label"
        help="Help Message"
        error="Error Message"
        inError={this.state.inError}
        required
      >
        <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
      </Field>
    );

    const requiredHidden = (
      <Field
        id="label-required"
        style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
        label="Field Label"
        help="Help Message"
        error="Error Message"
        inError={this.state.inError}
        required
        hideRequired
      >
        <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
      </Field>
    );

    const inline = (
      <div>
        <Field
          id="label"
          style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
          label="Field Label"
          error="Error Message"
          isInline
          inError={this.state.inError}
          required
        >
          <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
        </Field>

        <Field
          id="label"
          style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
          label="Field Label"
          error="Error Message"
          isInline
          inError={this.state.inError}
          showOptional
        >
          <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
        </Field>

        <Field
          id="label-optional"
          style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
          label="Field Label"
          error="Error Message"
          isInline
          inError={this.state.inError}
          required
        >
          <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
        </Field>
      </div>
    );

    return (
      <div>
        <button onClick={this.handleInErrorChange}>Toggle In Error </button>
        <h3>Field</h3>
        {field}
        <h3>Field - Optional</h3>
        {optional}
        <h3>Field - Required</h3>
        {required}
        <h3>Field - Required but Hidden Indicator</h3>
        {requiredHidden}
        <h3>Field - Inline</h3>
        {inline}
      </div>
    );
  }
}

export default FieldExamples;
