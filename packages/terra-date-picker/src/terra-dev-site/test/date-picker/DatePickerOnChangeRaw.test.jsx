import React from 'react';
import DatePicker from '../../../../lib/DatePicker';

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
          {' '}
          <span id="selected-date">{this.state.date}</span>
        </h3>
        <DatePicker
          name="date-input-onchangeraw"
          onChangeRaw={this.handleDateChangeRaw}
        />
      </div>
    );
  }
}

export default DatePickerOnChange;
