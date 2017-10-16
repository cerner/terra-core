import React from 'react';
import Base from 'terra-base';
import DateTimePicker from '../../../lib/DateTimePicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class DatePickerOnChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: '' };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(event, date) {
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <h3>Selected Date: {this.state.date}</h3>
        <Base locale={locale}>
          <DateTimePicker
            name="date-time-picker-onchange"
            onChange={this.handleDateChange}
          />
        </Base>
      </div>
    );
  }
}

export default DatePickerOnChange;
