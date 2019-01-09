import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'terra-base/lib/baseStyles';
import DatePicker from './DatePicker';

const propTypes = {
  /**
   * An ISO 8601 string representation of the default end date for a date range.
   */
  endDate: PropTypes.string,
  /**
   * Name of the endDate input. The name should be unique.
   */
  endName: PropTypes.string.isRequired,
  /**
   * An ISO 8601 string representation of the selected start date.
   */
  startDate: PropTypes.string,
  /**
   * Name of the startDate input. The name should be unique.
   */
  startName: PropTypes.string.isRequired,
  /**
   * A callback function to execute when a valid date is selected or entered. The parameters in the function are event, start date, end date.
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  endDate: undefined,
  startDate: undefined,
  onChange: undefined,
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

  handleChange(event, { startDate = this.state.startDate, endDate = this.state.endDate }) {
    let startDateForRange = startDate;
    let endDateForRange = endDate;

    if (moment(startDateForRange).isAfter(moment(endDateForRange))) {
      [startDateForRange, endDateForRange] = [endDateForRange, startDateForRange];
    }

    this.setState({ startDate: startDateForRange, endDate: endDateForRange });

    if (this.props.onChange) {
      this.props.onChange(event, startDateForRange, endDateForRange);
    }
  }

  handleChangeStart(event, startDate) {
    this.handleChange(event, { startDate });
  }

  handleChangeEnd(event, endDate) {
    this.handleChange(event, { endDate });
  }

  render() {
    const {
      endDate,
      endName,
      startDate,
      startName,
      onChange,
      ...customProps
    } = this.props;

    return (
      <div className="terra-DatePicker-range">
        <DatePicker
          {...customProps}
          selectedDate={this.state.startDate}
          isStartDateRange
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          name={startName}
          onChange={this.handleChangeStart}
        />
        <DatePicker
          {...customProps}
          selectedDate={this.state.endDate}
          isEndDateRange
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          name={endName}
          onChange={this.handleChangeEnd}
        />
      </div>
    );
  }
}

DateRange.propTypes = propTypes;
DateRange.defaultProps = defaultProps;

export default DateRange;
