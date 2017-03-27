import React, { PropTypes } from 'react';
import DatePicker from '../lib/DatePicker';

const propTypes = {
  endDate: PropTypes.oneOfType([PropTypes.object]),
  startDate: PropTypes.oneOfType([PropTypes.object]),
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

  handleChange({ startDate, endDate }) {
    let startDateForRange = startDate || this.state.startDate;
    let endDateForRange = endDate || this.state.endDate;

    if (startDateForRange.isAfter(endDateForRange)) {
      const tempDate = startDateForRange;
      startDateForRange = endDateForRange;
      endDateForRange = tempDate;
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
