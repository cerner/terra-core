import React from 'react';
import DatePicker from 'terra-date-picker';

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
        <div id="selected-index">
          <h3>Selected Date: {this.state.date}</h3>
        </div>
        <DatePicker
          name="date-input-onchange"
          onChange={this.handleDateChange}
        />
      </div>
    );
  }
}

export default DatePickerOnChange;
