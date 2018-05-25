import React from 'react';
import Base from 'terra-base';
import TimeInput from '../../../../TimeInput';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

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
      <Base locale={locale}>
        <div id="time-input-value">
          <h3>Time Input: {this.state.input}</h3>
        </div>
        <div style={{ 'caret-color': 'transparent' }}>
          <TimeInput
            id="timeInput"
            name="time-input"
            onChange={this.handleOnChange}
            variant="12-hour"
          />
        </div>
      </Base>
    );
  }
}
export default TimeInputDefault;
