import React from 'react';

import TextField from '../../../lib/TextField';

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      associate_id: '',
    };

    this.updateAssociateId = this.updateAssociateId.bind(this);
  }

  updateAssociateId(e) {
    this.setState({
      associate_id: e.target.value,
    });
  }

  render() {
    return (
      <form>
        <TextField
          label="Associate ID"
          type="text"
          name="associate_id"
          value={this.state.associate_id}
          onChange={this.updateAssociateId}
          required
        />
      </form>
    );
  }
}

export default ControlledInput;
