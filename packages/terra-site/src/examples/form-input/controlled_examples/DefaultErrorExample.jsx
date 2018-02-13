import React from 'react';

import FormInput from 'terra-form-input/lib/Input';

class DefaultErrorExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: 'Default Error Input' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return(
      <div>
        <h4>Default</h4>
        <FormInput
          name="default error input"
          value={this.state.input}
          onChange={this.handleChange}
          isInvalid
        />
        <p>Input Provided: {this.state.input}</p>
      </div>
    );
  }
}

export default DefaultErrorExample;
