import React from 'react';

import FormInput from 'terra-form-input/lib/Input';

class DisabledErrorExample extends React.Component {
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
        <h4>Disabled</h4>
        <FormInput
          disabled
          value={this.state.input}
          name="disabled input"
          onChange={this.handleChange}
          isInvalid
        />
        <p>Input Provided: {this.state.input}</p>
      </div>
    );
  }
}

export default DisabledErrorExample;
