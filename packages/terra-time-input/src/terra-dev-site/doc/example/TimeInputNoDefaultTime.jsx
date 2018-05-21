import React from 'react';
import TimeInput from '../../../TimeInput';

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
        <p>Time Provided: <span style={{ display: 'inline-block' }}>{this.state.time}</span></p>
        <TimeInput
          name="time-input-default"
          onChange={this.handleTimeChange}
        />
      </div>
    );
  }
}

export default timeInput;
