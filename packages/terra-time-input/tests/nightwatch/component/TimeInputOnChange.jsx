import React from 'react';
import TimeInput from '../../../lib/TimeInput';

class TimeInputDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: null };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event, input) {
    this.setState({ input });
  }

  render() {
    return (
      <div>
        <div id="time-input-value">
          <h3>Time Input: {this.state.input}</h3>
        </div>
        <TimeInput
          id="timeInput"
          name="time-input"
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}
export default TimeInputDefault;
