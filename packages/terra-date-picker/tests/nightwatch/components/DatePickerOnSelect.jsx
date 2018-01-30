import React from 'react';
import Base from 'terra-base';
import DatePicker from '../../../lib/DatePicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class DatePickerOnChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: '' };
    this.handleDateSelect = this.handleDateSelect.bind(this);
  }

  handleDateSelect(event, date) {
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <h3>Selected Date: <span id="selected-date">{this.state.date}</span></h3>
        <Base locale={locale}>
          <DatePicker
            name="date-input-onselect"
            onSelect={this.handleDateSelect}
          />
        </Base>
      </div>
    );
  }
}

export default DatePickerOnChange;
