import React from 'react';
import Select from '../../../Select';

class ControlledDefault extends React.Component {
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
      <Select
        placeholder="Select a color"
        required
        onChange={this.handleChange}
        id="default"
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

export default ControlledDefault;
