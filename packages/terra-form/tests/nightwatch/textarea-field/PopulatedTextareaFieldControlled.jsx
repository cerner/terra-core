import React from 'react';

import TextareaField from '../../../lib/TextareaField';

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile_description: 'Hello! I am a Software Engineer from Kansas City!',
    };

    this.updateName = this.updateName.bind(this);
  }

  updateProfileDescription(e) {
    this.setState({
      profile_description: e.target.value,
    });
  }

  render() {
    return (
      <form>
        <TextareaField
          type="text"
          name="foo"
          value={this.state.profile_description}
          onChange={this.updateProfileDescription}
          required
        />
      </form>
    );
  }
}

export default ControlledInput;
