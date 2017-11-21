import React from 'react';
import Base from 'terra-base';
import TimeInput from '../../../lib/TimeInput';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default class TimeInputElement extends React.Component {
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

  render() {
    return (
      <Base locale={locale}>
        <TimeInput
          id="timeInput"
          name="time-input"
          value="09:23"
          hourAttributes={{ id: 'hours-testing' }}
          minuteAttributes={{ id: 'minutes-testing' }}
          variant="12-hour"
        />
      </Base>
    );
  }
}
