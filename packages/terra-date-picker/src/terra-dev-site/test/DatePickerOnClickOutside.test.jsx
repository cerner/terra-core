import React from 'react';
import Base from 'terra-base';
import DatePicker from '../../../lib/DatePicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

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
        <h3>Message: <span id="message">{this.state.message}</span></h3>
        <Base locale={locale}>
          <DatePicker
            name="date-input-onclickoutside"
            onClickOutside={this.handleClickOutside}
          />
        </Base>
      </div>
    );
  }
}

export default DatePickerOnChange;
