import React from 'react';
import Field from 'terra-form-field';
import Input from 'terra-form-input';

class DefaultIncompleteExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      isIncomplete: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
      isIncomplete: event.target.value.length === 0,
    });
  }

  render() {
    return (
      <div>
        <Field label="Default" htmlFor="default-controlled-incomplete">
          <Input
            name="default incomplete input"
            id="default-controlled-incomplete"
            value={this.state.input}
            onChange={this.handleChange}
            required
            isIncomplete={this.state.isIncomplete}
          />
        </Field>
        <p>
Input Provided:
          {this.state.input}
        </p>
      </div>
    );
  }
}

export default DefaultIncompleteExample;
