import React from 'react';
import TimeInput from '../../../../TimeInput';

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
          <h3>
Time Input:
            {this.state.input}
          </h3>
        </div>
        <div style={{ caretColor: 'transparent' }}>
          <TimeInput
            id="timeInput"
            name="time-input"
            onChange={this.handleOnChange}
            variant="12-hour"
          />
        </div>
      </div>
    );
  }
}
export default TimeInputDefault;
