import React from 'react';
import Base from 'terra-base';
import TimeInput from '../../../TimeInput';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const TimeInputDefault = () => (
  <Base locale={locale}>
    <TimeInput
      id="timeInput"
      name="time-input"
      value="2:00"
    />
  </Base>
);

export default TimeInputDefault;
