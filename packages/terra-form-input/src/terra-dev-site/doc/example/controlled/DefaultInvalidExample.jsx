import React from 'react';
import Field from 'terra-form-field';
import Input from 'terra-form-input';

class DefaultInvalidExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: 'Default Error Input' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div>
        <Field label="Default" htmlFor="default-controlled-invalid">
          <Input
            name="default error input"
            id="default-controlled-invalid"
            value={this.state.input}
            onChange={this.handleChange}
            isInvalid
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

export default DefaultInvalidExample;
