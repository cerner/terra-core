import React from 'react';

import FormInput from 'terra-form-input/lib/FormInput';

class DisabledExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: 'DisabledExample input' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return(
      <div>
        <h4>Disabled</h4>
        <FormInput
          defaultValue="Disabled Input"
          disabled
          name="disabled input"
          onChange={this.handleChange}
        />
        <p>Input Provided: {this.state.input}</p>
      </div>
    );
  }
}

export default DisabledExample;
