import React from 'react';

import Input from '../../../../lib/components/Input';

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Jack',
    };

    this.updateName = this.updateName.bind(this);
  }

  updateName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    return (
      <form>
        <p>Controlled</p>
        <Input
          type="text"
          name="foo"
          value={this.state.name}
          onChange={this.updateName}
          required
        />
      </form>
    );
  }
}

export default ControlledInput;
