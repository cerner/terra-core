import React from 'react';

import Input from 'terra-form-input';

class DisabledExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: 'Disabled Example input' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div>
        <h4>Disabled</h4>
        <Input
          disabled
          value={this.state.input}
          name="disabled input"
          onChange={this.handleChange}
        />
        <p>Input Provided: {this.state.input}</p>
      </div>
    );
  }
}

export default DisabledExample;
