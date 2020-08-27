import React from 'react';
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
        <Input
          disabled
          value={this.state.input}
          name="disabled input"
          id="controlled-disabled-invalid"
          onChange={this.handleChange}
          isInvalid
        />
        <p>
          Input Provided:
          {this.state.input}
        </p>
      </div>
    );
  }
}

export default DisabledInvalidExample;
