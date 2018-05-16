import React from 'react';
import Base from 'terra-base';
import Select from '../../lib/Select';

class ControlledSearch extends React.Component {
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
          id="search"
          onChange={this.handleChange}
          placeholder="Select a color"
          value={this.state.value}
          variant="search"
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

export default ControlledSearch;
