import React from 'react';
import moment from 'moment';
import DatePicker from 'terra-date-picker';

class DatePickerExample extends React.Component {
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
        <p>Selected ISO formatted Date: {this.state.date}</p>
        <DatePicker
          name="date-input-min-max"
          minDate={moment().format()}
          maxDate={moment().add(6, 'days').format()}
          onChange={this.handleDateChange}
        />
      </div>
    );
  }
}

export default DatePickerExample;
