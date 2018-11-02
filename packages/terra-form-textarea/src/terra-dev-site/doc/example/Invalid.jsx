import React, { Component } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Textarea from 'terra-form-textarea/lib/Textarea';

class InvalidExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: '',
    };
    this.handleAreaChange = this.handleAreaChange.bind(this);
  }

  handleAreaChange(event) {
    this.setState({ area: event.target.value });
  }

  render() {
    return (
      <Textarea
        value={this.state.area}
        isInvalid={this.state.area === ''}
        onChange={this.handleAreaChange}
        size="small"
      />
    );
  }
}

export default InvalidExample;
