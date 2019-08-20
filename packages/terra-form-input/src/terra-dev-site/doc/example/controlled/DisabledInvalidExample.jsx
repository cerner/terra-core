import React from 'react';
import Field from 'terra-form-field';
import Input from 'terra-form-input';

class DisabledInvalidExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: 'Disabled Error Example input' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div>
        <Field label="Disabled" htmlFor="controlled-disabled-invalid">
          <Input
            disabled
            value={this.state.input}
            name="disabled input"
            id="controlled-disabled-invalid"
            onChange={this.handleChange}
            isInvalid
            ariaLabel="form-input-label"
          />
        </Field>
        <p>
Input Provided:
          {this.state.input}
        </p>
      </div>
    );
  }
}

export default DisabledInvalidExample;
