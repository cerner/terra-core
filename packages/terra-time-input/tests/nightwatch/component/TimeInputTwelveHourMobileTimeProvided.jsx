import React from 'react';
import Base from 'terra-base';
import TimeInput from '../../../lib/TimeInput';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default class TimeInputElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '15:23' };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentWillMount() {
    if (!window.ontouchstart) {
      this.resetontouchstart = true;
      window.ontouchstart = 'true';
    }
  }

  componentWillUnmount() {
    if (this.resetontouchstart) {
      delete window.ontouchstart;
    }
  }

  handleOnChange(event, input) {
    this.setState({ input });
  }

  render() {
    return (
      <Base locale={locale}>
        <div id="time-input-value">
          <h3>Time Input: {this.state.input}</h3>
        </div>
        <TimeInput
          id="timeInput"
          name="time-input"
          value={this.state.input}
          onChange={this.handleOnChange}
          variant="12-hour"
        />
      </Base>
    );
  }
}
