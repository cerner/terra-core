import React from 'react';
import Select from '../../../Select';

class ControlledTag extends React.Component {
  constructor() {
    super();

    this.state = { value: [] };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <Select
        onChange={this.handleChange}
        placeholder="Select a color"
        required
        variant="tag"
        id="tag"
        value={this.state.value}
      >
        <Select.Option value="blue" display="Blue" />
        <Select.Option value="green" display="Green" />
        <Select.Option value="purple" display="Purple" />
        <Select.Option value="red" display="Red" />
        <Select.Option value="violet" display="Violet" />
      </Select>
    );
  }
}

export default ControlledTag;
