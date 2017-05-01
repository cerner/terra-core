import React, { PropTypes } from 'react';
import moment from 'moment';
import 'terra-base/lib/baseStyles';
import DatePicker from './DatePicker';

const propTypes = {
  /**
   * An ISO 8601 string representation of the default end date for a date range.
   */
  endDate: PropTypes.string,
  /**
   * An ISO 8601 string representation of the selected start date.
   */
  startDate: PropTypes.string,
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: PropTypes.func,
};

class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'MM/DD/YYYY', // TODO: Get the format from i18n
      startDate: props.startDate,
      endDate: props.endDate,
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChange({ startDate = this.state.startDate, endDate = this.state.endDate }) {
    let startDateForRange = startDate;
    let endDateForRange = endDate;

    if (moment(startDateForRange, this.state.format).isAfter(moment(endDateForRange, this.state.format))) {
      [startDateForRange, endDateForRange] = [endDateForRange, startDateForRange];
    }

    this.setState({ startDate: startDateForRange, endDate: endDateForRange });

    if (this.props.onChange) {
      this.props.onChange(startDateForRange, endDateForRange);
    }
  }

  handleChangeStart(startDate) {
    this.handleChange({ startDate });
  }

  handleChangeEnd(endDate) {
    this.handleChange({ endDate });
  }

  render() {
    return (<div className="terra-DatePicker-range">
      <DatePicker
        {...this.props}
        selectedDate={this.state.startDate}
        isStartDateRange
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onChange={this.handleChangeStart}
      />
      <DatePicker
        {...this.props}
        selectedDate={this.state.endDate}
        isEndDateRange
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onChange={this.handleChangeEnd}
      />
    </div>);
  }
}

DateRange.propTypes = propTypes;

export default DateRange;
