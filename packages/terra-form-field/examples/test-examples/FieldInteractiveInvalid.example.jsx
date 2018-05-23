import React from 'react';
import Base from 'terra-base';
import Field from '../../lib/Field';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class FieldExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isInvalid: false };
    this.handleIsInvalidChange = this.handleIsInvalidChange.bind(this);
  }

  handleIsInvalidChange() {
    this.setState({ isInvalid: !this.state.isInvalid });
  }

  render() {
    const field = (
      <Field
        id="default"
        style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
        label="Field Label"
        help="Help Message"
        error="Error Message"
        isInvalid={this.state.isInvalid}
      >
        <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
      </Field>
    );

    const optional = (
      <Field
        id="optional"
        style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
        label="Field Label"
        help="Help Message"
        error="Error Message"
        isInvalid={this.state.isInvalid}
        showOptional
      >
        <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
      </Field>
    );

    const required = (
      <Field
        id="required"
        style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
        label="Field Label"
        help="Help Message"
        error="Error Message"
        isInvalid={this.state.isInvalid}
        required
      >
        <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
      </Field>
    );

    const requiredHidden = (
      <Field
        id="required-hidden"
        style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
        label="Field Label"
        help="Help Message"
        error="Error Message"
        isInvalid={this.state.isInvalid}
        required
        hideRequired
      >
        <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
      </Field>
    );

    const hiddenLabel = (
      <Field
        id="label-hidden"
        style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
        label="Field Label"
        help="Help Message"
        error="Error Message"
        isInvalid={this.state.isInvalid}
        isLabelHidden
      >
        <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
      </Field>
    );

    const inline = (
      <div>
        <Field
          id="inline-1"
          style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
          label="Field Label - Spacing POC"
          error="Error Message"
          isInline
          isInvalid={this.state.isInvalid}
          required
        >
          <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
        </Field>

        <Field
          id="inline-2"
          style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
          label="Field Label - Spacing POC"
          error="Error Message"
          isInline
          isInvalid={this.state.isInvalid}
          required
          hideRequired
        >
          <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
        </Field>

        <Field
          id="inline-3"
          style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
          label="Field Label - Spacing POC"
          error="Error Message"
          isInline
          isInvalid={this.state.isInvalid}
          showOptional
        >
          <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
        </Field>
      </div>
    );

    return (
      <Base locale={locale}>
        <button id="toggle-is-invalid" onClick={this.handleIsInvalidChange}>Toggle In Error </button>
        <h3>Field</h3>
        {field}
        <h3>Field - Optional</h3>
        {optional}
        <h3>Field - Required</h3>
        {required}
        <h3>Field - Required but Indicator Hidden</h3>
        {requiredHidden}
        <h3>Field - Hidden Label</h3>
        {hiddenLabel}
        <h3>Field - Inline</h3>
        {inline}
      </Base>
    );
  }
}

export default FieldExamples;
