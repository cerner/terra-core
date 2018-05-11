import React from 'react';
import Select from 'terra-form-select';

class ControlledExample extends React.Component {
  constructor() {
    super();

    this.state = { value: 'blue' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <Select placeholder="Select a color" value={this.state.value} onChange={this.handleChange}>
        <Select.Option value="blue" display="Blue" />
        <Select.Option value="green" display="Green" />
        <Select.Option value="purple" display="Purple" />
        <Select.Option value="red" display="Red" />
        <Select.Option value="violet" display="Violet" />
      </Select>
    );
  }
}

export default ControlledExample;
