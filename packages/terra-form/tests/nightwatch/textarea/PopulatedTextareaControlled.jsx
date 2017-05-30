import React from 'react';

import Textarea from '../../../lib/Textarea';

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      job_experience: '',
    };

    this.updateJobExperience = this.updateJobExperience.bind(this);
  }

  updateJobExperience(e) {
    this.setState({
      job_experience: e.target.value,
    });
  }

  render() {
    return (
      <form>
        <Textarea
          name="job_experience"
          value={this.state.job_experience}
          onChange={this.updateJobExperience}
          required
        />
      </form>
    );
  }
}

export default ControlledInput;
