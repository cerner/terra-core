import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DatePicker from 'terra-date-picker/lib/DatePicker';

const propTypes = {
  /**
   * The current DatePicker date if selected. Use for the selected date message.
   */
  selectedDate: PropTypes.node,
};

const defaultProps = {
  selectedDate: '',
};

class DatePickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: this.props.selectedDate };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(event, date) {
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <p>
Selected ISO Date:
          <span style={{ display: 'inline-block' }}>{this.state.date}</span>
        </p>
        <Field label="Enter Date" htmlFor="filter-dates">
          <DatePicker
            name="date-input"
            id="filter-dates"
            onChange={this.handleDateChange}
            {...this.props}
          />
        </Field>
      </div>
    );
  }
}

DatePickerExample.propTypes = propTypes;
DatePickerExample.defualtProps = defaultProps;

const isWeekday = (date) => {
  const day = date.day();
  return day !== 0 && day !== 6;
};

const DatePickerExampleFilterDates = () => (
  <DatePickerExample filterDate={isWeekday} />
);

export default DatePickerExampleFilterDates;
