import React from 'react';
import DatePicker from '../../../lib/DatePicker';

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
        <DatePicker
          name="date-input-onchange"
          onChange={this.handleDateChange}
        />
      </div>
    );
  }
}

export default DatePickerOnChange;
