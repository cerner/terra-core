import React from 'react';

import Select from '../../../lib/Select';

class ControlledSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = { selectedValue: 'puppies' };
  }

  handleOnChange(event, selectedValue) {
    this.setState({ selectedValue });
  }

  render() {
    return (
      <div>
        <p>Controlled select. Uses value and onChange props to manage state. Initial value is puppies.</p>
        <form>
          <Select
            name="zibby"
            value={this.state.selectedValue}
            onChange={this.handleOnChange}
            id="controlledSelect"
          >
            <Select.Option value="puppies" display="Puppies" key="puppies" />
            <Select.Option value="kittens" display="Kittens" key="kittens" id="kittens" />
            <Select.Option value="snappers" display="Snappers" key="snappers" />
            <Select.Option value="bumblers" display="Bumblers" disabled key="bumblers" id="disabledOption" />
            <Select.Option value="joeys" display="Joeys" key="joeys" />
            <Select.Option value="micros" display="Microprocessors" disabled key="miros" />
          </Select>
        </form>
        <br />
      </div>
    );
  }
}

export default ControlledSelect;
