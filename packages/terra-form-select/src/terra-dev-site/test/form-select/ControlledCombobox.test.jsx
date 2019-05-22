import React from 'react';
import Select from '../../../Select';
// `default`,
// `search`, `multiple`,
// `combobox`, `tag`

class ControlledCombobox extends React.Component {
  constructor() {
    super();

    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <h3>
          Selected Option:
          <span id="selected-option">{this.state.value}</span>
        </h3>
        <Select
          id="combobox"
          onChange={this.handleChange}
          placeholder="Select a color"
          value={this.state.value}
          variant="combobox"
        >
          <Select.Option value="blue-value" display="Blue" />
          <Select.Option value="green-value" display="Green" />
          <Select.Option value="purple-value" display="Purple" />
          <Select.Option value="red-value" display="Red" />
          <Select.Option value="violet-value" display="Violet" />
        </Select>
      </div>
    );
  }
}

export default ControlledCombobox;
