import React, { Component } from 'react';
import Textarea from 'terra-form-textarea';

class InvalidExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: '',
      isInvalid: true,
    };
    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  handleAreaChange(event) {
    this.setState({ area: event.target.value });
  }

  handleSubmitButton() {
    this.setState(prevState => ({ isInvalid: !prevState.isInvalid }));
  }

  render() {
    return (
      <div>
        <Textarea
          value={this.state.area}
          isInvalid={this.state.isInvalid}
          onChange={this.handleAreaChange}
          size="small"
          id="invalid"
        />
        <button type="button" id="toggle-is-invalid" onClick={this.handleSubmitButton}>Toggle Error State</button>
      </div>
    );
  }
}

export default InvalidExample;
