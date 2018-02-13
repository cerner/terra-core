import React from 'react';

import FormInput from 'terra-form-input/lib/Input';

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
    return(
      <div>
        <h4>Default</h4>
        <FormInput
          name="default input"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <p>Input Provided: {this.state.input}</p>
      </div>
    );
  }
}

export default DefaultExample;
