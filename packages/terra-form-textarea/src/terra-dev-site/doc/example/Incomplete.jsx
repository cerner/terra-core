import React, { Component } from 'react';
import Field from 'terra-form-field';
import Textarea from 'terra-form-textarea';

class IncompleteExample extends Component {
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
      <Field label="Incomplete Textarea When Empty" htmlFor="incomplete">
        <Textarea
          value={this.state.area}
          required
          isIncomplete={this.state.area === ''}
          onChange={this.handleAreaChange}
          size="small"
          id="incomplete"
        />
      </Field>
    );
  }
}

export default IncompleteExample;
