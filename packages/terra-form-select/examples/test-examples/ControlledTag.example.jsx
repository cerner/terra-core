import React from 'react';
import Base from 'terra-base';
import Select from '../../lib/Select';

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
      <Base locale="en-US">
        <Select
          onChange={this.handleChange}
          placeholder="Select a color"
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
      </Base>
    );
  }
}

export default ControlledTag;
