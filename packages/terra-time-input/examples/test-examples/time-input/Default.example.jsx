import React from 'react';
import Base from 'terra-base';
import TimeInput from '../../../lib/TimeInput';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const TimeInputDefault = () => (
  <Base locale={locale}>
    <div style={{ 'caret-color': 'transparent' }}>
      <TimeInput
        id="timeInput"
        name="time-input"
      />
    </div>
  </Base>
);

export default TimeInputDefault;
