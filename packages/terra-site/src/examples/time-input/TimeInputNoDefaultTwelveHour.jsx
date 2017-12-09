import React from 'react';
import TimeInput from 'terra-time-input';
import styles from '../../site.scss';

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
        <p>Time Provided: <span className={styles['site-input-display']}>{this.state.time}</span></p>
        <TimeInput
          name="time-input-value"
          value={this.state.time}
          onChange={this.handleTimeChange}
          variant="12-hour"
        />
      </div>
    );
  }
}

export default timeInput;
