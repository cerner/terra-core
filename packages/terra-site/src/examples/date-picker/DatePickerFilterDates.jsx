import React from 'react';
import DatePicker from 'terra-date-picker';

const isWeekday = (date) => {
  const day = date.day();
  return day !== 0 && day !== 6;
};

class DatePickerFilterDates extends React.Component {
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
          name="date-input-filter"
          filterDate={isWeekday}
          onChange={this.handleDateChange}
        />
      </div>
    );
  }
}

export default DatePickerFilterDates;
