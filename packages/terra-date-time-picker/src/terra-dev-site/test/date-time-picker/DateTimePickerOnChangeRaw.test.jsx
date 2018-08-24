import React from 'react';
import DateTimePicker from '../../../DateTimePicker';

class DatePickerOnChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: '' };
    this.handleDateChangeRaw = this.handleDateChangeRaw.bind(this);
  }

  handleDateChangeRaw(event, date) {
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <h3>
Selected Date:
          <span id="selected-date">{this.state.date}</span>
        </h3>
        <DateTimePicker
          name="date-time-picker-onchangeraw"
          onChangeRaw={this.handleDateChangeRaw}
        />
      </div>
    );
  }
}

export default DatePickerOnChange;
