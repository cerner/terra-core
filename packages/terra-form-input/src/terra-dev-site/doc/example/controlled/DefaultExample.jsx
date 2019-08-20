import React from 'react';
import Field from 'terra-form-field';
import Input from 'terra-form-input';

class DefaultExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: 'Default Input' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div>
        <Field label="Default" htmlFor="default-controlled">
          <Input
            name="default input"
            id="default-controlled"
            value={this.state.input}
            onChange={this.handleChange}
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

export default DefaultExample;
