import React from 'react';

import FormInput from 'terra-form-input/lib/FormInput';

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
          defaultValue="Default Error Input"
          name="default error input"
          onChange={this.handleChange}
          isInvalid
        />
        <p>Input Provided: {this.state.input}</p>
      </div>
    );
  }
}

export default DefaultErrorExample;