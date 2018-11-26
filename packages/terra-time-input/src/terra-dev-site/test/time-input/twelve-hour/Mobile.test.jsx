import React from 'react';
import TimeInput from '../../../../TimeInput';

export default class TimeInputElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '15:23' };
    this.handleOnChange = this.handleOnChange.bind(this);
    if (!window.ontouchstart) {
      this.resetontouchstart = true;
      window.ontouchstart = 'true';
    }
  }

  componentDidMount() {
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
      <div style={{ caretColor: 'transparent' }}>
        <h3>Empty Time Input</h3>
        <TimeInput
          id="timeInput"
          name="time-input"
          variant="12-hour"
        />
        <h3>(this picker is changeable)</h3>
        <div id="time-input-value">
          <h3>
Time Input with value provided - Current Value:
            {this.state.input}
          </h3>
        </div>
        <TimeInput
          id="timeInputValueProvided"
          name="time-input-value-provided"
          value={this.state.input}
          onChange={this.handleOnChange}
          variant="12-hour"
        />
        <h3>Time Input with IDs Provided</h3>
        <TimeInput
          id="timeInputIdProvided"
          name="time-input-id-provided"
          value="09:23"
          hourAttributes={{ id: 'hours-testing' }}
          minuteAttributes={{ id: 'minutes-testing' }}
          variant="12-hour"
        />
        <h3>Time Input with disabled input</h3>
        <TimeInput
          id="timeInputDisabled"
          name="time-input-disabled"
          variant="12-hour"
          disabled
        />
      </div>
    );
  }
}
