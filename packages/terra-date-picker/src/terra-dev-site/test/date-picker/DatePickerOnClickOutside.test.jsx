import React from 'react';
import DatePicker from '../../../../lib/DatePicker';

class DatePickerOnChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside() {
    this.setState({ message: 'Picker is dismissed after clicking outside' });
  }

  render() {
    return (
      <div>
        <h3>
          Message:
          {' '}
          <span id="message">{this.state.message}</span>
        </h3>
        <DatePicker
          name="date-input-onclickoutside"
          onClickOutside={this.handleClickOutside}
        />
      </div>
    );
  }
}

export default DatePickerOnChange;
