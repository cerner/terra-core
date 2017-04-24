import React, { PropTypes } from 'react';
import 'terra-base/lib/baseStyles';
import DatePicker from './DatePicker';

const propTypes = {
  /**
   * A moment object to use as the default end date for a date range.
   */
  endDate: PropTypes.oneOfType([PropTypes.object]),
  /**
   * A moment object to use as the default start date for a date range.
   */
  startDate: PropTypes.oneOfType([PropTypes.object]),
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: PropTypes.func,
};

class DateRange extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: props.startDate,
      endDate: props.endDate,
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChange({ startDate = this.state.startDate, endDate = this.state.endDate }) {
    let startDateForRange = startDate;
    let endDateForRange = endDate;

    if (startDateForRange.isAfter(endDateForRange)) {
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
