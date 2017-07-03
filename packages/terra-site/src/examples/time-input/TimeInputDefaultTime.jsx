import React from 'react';
import moment from 'moment';
import TimeInput from 'terra-time-input';

class timeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: '' };
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleTimeChange(event, time) {
    this.setState({ time });
  }

  render() {
    return (
      <div>
        <h3>Updated time: {this.state.time}</h3>
        <TimeInput
          name="time-input-value"
          value={moment().format('HH:mm')}
          onChange={this.handleTimeChange}
        />
      </div>
    );
  }
}

export default timeInput;
