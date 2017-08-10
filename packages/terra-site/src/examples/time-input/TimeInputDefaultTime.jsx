import React from 'react';
import moment from 'moment';
import TimeInput from 'terra-time-input';

class timeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: moment().format('HH:mm') };
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleTimeChange(event, time) {
    this.setState({ time });
  }

  render() {
    return (
      <div>
        <p>Time Provided: {this.state.time}</p>
        <TimeInput
          name="time-input-value"
          value={this.state.time}
          onChange={this.handleTimeChange}
        />
      </div>
    );
  }
}

export default timeInput;
