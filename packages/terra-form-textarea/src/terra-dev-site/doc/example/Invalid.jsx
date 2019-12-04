import React, { Component } from 'react';
import Field from 'terra-form-field';
import Textarea from 'terra-form-textarea';

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
      <Field label="Invalid Textarea When Empty" htmlFor="invalid">
        <Textarea
          value={this.state.area}
          isInvalid={this.state.area === ''}
          onChange={this.handleAreaChange}
          size="small"
          id="invalid"
        />
      </Field>
    );
  }
}

export default InvalidExample;
