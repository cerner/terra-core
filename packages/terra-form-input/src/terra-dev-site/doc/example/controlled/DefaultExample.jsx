import React from 'react';
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
        <Input
          name="default input"
          value={this.state.input}
          onChange={this.handleChange}
          ariaLabel="Default"
        />
        <p>
          Input Provided:
          {this.state.input}
        </p>
      </div>
    );
  }
}

export default DefaultExample;
